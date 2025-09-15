import { useState } from 'react'
import FormNewTask from './Components/FormNewTask'
import PreTasks from './Components/PreTasks';
import InTasks from './Components/InTasks';
import PostTasks from './Components/PostTasks';
import FormConfirmNext from './Components/FormConfirmNext';
import Timer from './Components/Timer';
import FormEndedTime from './Components/FormEndedTime';
import './App.css'

interface Task{
  id: number;
  title: string;
  description: string;
  isCompleted: boolean;
}

function App() {

  let [taskList, setTaskList] = useState<Task[]>([]);
  let [doneTaskList, setDoneTaskList] = useState<Task[]>([]);
  let [showTaskForm, setShowTaskForm] = useState(false);
  let [showFormConfirm, setShowFormConfirm] = useState(false);
  let [showFormEnd, setShowFormEnd] = useState(false);

  function deleteTask(id: number) {
    setTaskList(taskList.filter((task) => task.id !== id));
  }

  const totalTasks = taskList.length + doneTaskList.length;
  const progressValue = totalTasks === 0 ? 0 : (doneTaskList.length / totalTasks) * 100;

  return (
    <>

    <div className='col-1'>
      <PreTasks taskList={taskList} showForm={setShowTaskForm} deleteTask={deleteTask}/>
      
      {showTaskForm? <FormNewTask taskList={taskList} setTaskList={setTaskList} showForm={setShowTaskForm}/> : ""}
    </div>

    <div className='col-2'>
      <Timer setShowFormEnd={setShowFormEnd}/>

      <progress value={progressValue} max={100} />

      <InTasks taskList={taskList} setShowConfirmNext={setShowFormConfirm}/>

      {showFormEnd? <FormEndedTime setShowFormEnd={setShowFormEnd} setTaskList={setTaskList} setDoneTaskList={setDoneTaskList} task={taskList[0]}/> : ""}
    </div>

    <div className='col-3'>

      { showFormConfirm? <FormConfirmNext setShowConfirmNext={setShowFormConfirm} task={taskList[0]} setTaskList={setTaskList} setDoneTaskList={setDoneTaskList}/> : ""}

      <PostTasks taskList={doneTaskList} deleteTask={deleteTask}/>
    </div>
    </>
  )
}

export default App;
