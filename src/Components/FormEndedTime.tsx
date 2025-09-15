import '../Styles/FormEndedTime.css'

interface Task{
  id: number;
  title: string;
  description: string;
  isCompleted: boolean;
}

interface Props{
    task: Task;
    setShowFormEnd: Function;
    setTaskList: Function;
    setDoneTaskList: Function;
}

function FormEndedTime(props: Props){

    return(

        <div className="form-ended-time">
            <div>
                <h2>O tempo acabou!</h2>
                <p>Conseguiu finalizar sua tarefa?</p>
            </div>
            <div className="actions">
                <button onClick={() => {props.setShowFormEnd(false)}}>Preciso de mais tempo</button>
                <button onClick={() => {
                            props.setShowFormEnd(false);
                            props.task.isCompleted = true;
                            props.setTaskList((prev: Task[]) => prev.filter((t) => t.id !== props.task.id));
                            props.setDoneTaskList((prev: Task[]) => [...prev, props.task]);
                            }}>Sim</button>
            </div>
        </div>

    )

}

export default FormEndedTime;
