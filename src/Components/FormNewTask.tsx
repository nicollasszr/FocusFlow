import { useState } from "react";
import '../Styles/FormNewTask.css'

interface Task{
  id: number;
  title: string;
  description: string;
  isCompleted: boolean;
}

interface Props{
    taskList: Task[]
    setTaskList: Function;
    showForm: Function;
}

function FormNewTask(props: Props){
    
    let [title, setTitle] = useState("undefined");
    let [description, setDescription] = useState("undefined");

    return(

        <div className="form-new-task">
            <h1>Adicionar Task</h1>
            <label>Título</label>
            <input type="text" placeholder="Insira o título da sua task" onChange={(event) => {setTitle(event.target.value)}}/>
            <label>Descrição</label>
            <input type="text" placeholder="Insira o que você precisa fazer" onChange={(event) => {setDescription(event.target.value)}}/>
            <div className="buttons">
                <button onClick={() => {props.showForm(false)}}>Cancelar</button>
                <button onClick={() => {
                    props.setTaskList([
                        ...props.taskList,
                        { id: props.taskList.length + 1, title: title, description: description, isCompleted: false }
                    ]);
                    props.showForm(false)
                }}>
                    Adicionar
                </button>
            </div>
        </div>

    )

}

export default FormNewTask;
