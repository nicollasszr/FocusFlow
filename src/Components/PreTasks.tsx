import TaskList from './TaskList';
import '../Styles/PreTasks.css'

interface Task{
  id: number;
  title: string;
  description: string;
  isCompleted: boolean;
}

interface Props{
    taskList: Task[];
    showForm: Function;
    deleteTask: (id: number) => void;
}

function PreTasks(props: Props){

    return(

        <div className="pre-tasks">
            <div className="header">
                <h1>Tarefas pendentes</h1>
                <button onClick={() => {props.showForm(true)}}>Adicionar</button>
            </div>
            <TaskList taskList={props.taskList} deleteTask={props.deleteTask}/>
        </div>

    )

}

export default PreTasks;
