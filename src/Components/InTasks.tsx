import '../Styles/InTasks.css'

interface Task{
  id: number;
  title: string;
  description: string;
  isCompleted: boolean;
}

interface Props{
    taskList: Task[]
    setShowConfirmNext: Function;
}

function InTasks(props: Props){

    return(
        <div className="in-tasks">
            <div className="header">
                <h1>Tarefa Atual</h1>
                <button onClick={() => {props.setShowConfirmNext(true)}}>Finalizar</button>
            </div>
            
            {props.taskList[0] ? (
                <div className="current-task">
                    <h1>{props.taskList[0].title}</h1>
                    <p>{props.taskList[0].description}</p>
                </div>
            ) : (
                <div className="current-task">
                    <p>Aguardando Nova Tarefa</p>
                </div>
            )}
        </div>
    )

}

export default InTasks;
