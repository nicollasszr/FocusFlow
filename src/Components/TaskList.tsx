import '../Styles/TaskList.css'

interface Task{
  id: number;
  title: string;
  description: string;
  isCompleted: boolean;
}

interface Props{
    taskList: Task[];
    deleteTask: Function;
}

function TaskList(props: Props){

    return(

        <div className="task-list">
            <ul>
                {props.taskList.map((task) => (
                    <li key={task.id}>
                        <div>
                            <h2>{task.title}</h2>
                            <p>{task.description}</p>
                            <button onClick={() => props.deleteTask(task.id, task.isCompleted)}>Excluir</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>

    )

}

export default TaskList;
