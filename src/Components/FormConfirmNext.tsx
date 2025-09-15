import '../Styles/FormConfirmNext.css'

interface Task{
  id: number;
  title: string;
  description: string;
  isCompleted: boolean;
}

interface Props{
    task: Task;
    setShowConfirmNext: Function;
    setTaskList: Function;
    setDoneTaskList: Function;
}

function FormConfirmNext(props: Props){

    return(

        <div className="confirm-form">
            <h1>Tem certeza?</h1>
            <p>Deseja passar essa tarefa para a lista das concluídas?</p>
            <div className="actions">
                <button onClick={() => {props.setShowConfirmNext(false)}}>Não</button>
                <button onClick={() => {
                            props.setShowConfirmNext(false);
                            props.task.isCompleted = true;
                            props.setTaskList((prev: Task[]) => prev.filter((t) => t.id !== props.task.id));
                            props.setDoneTaskList((prev: Task[]) => [...prev, props.task]);
                            }}>Sim</button>
            </div>
        </div>

    )

}

export default FormConfirmNext;
