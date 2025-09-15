import TaskList from "./TaskList";
import '../Styles/PostTasks.css'

interface Task{
  id: number;
  title: string;
  description: string;
  isCompleted: boolean;
}

interface Props{
    taskList: Task[];
    deleteTask: (id: number) => void;
}

function PostTasks(props: Props){

    return(

        <div className="post-tasks">
            <h1>Tarefas Finalizadas</h1>

            <TaskList taskList={props.taskList} deleteTask={props.deleteTask}/>
        </div>

    )

}

export default PostTasks;
