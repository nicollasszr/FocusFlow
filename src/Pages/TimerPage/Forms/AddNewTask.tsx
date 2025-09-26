import { useState } from "react";
import { useContext } from "react";
import { CardContext } from "../Contexts/CardContext";
import '../Styles/Forms.css'

type Data = { showForm: Function}

function AddNewTask({showForm} : Data){

    const context = useContext(CardContext);
    if (!context){return}

    const { cards, setCards } = context;

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const newId = crypto.randomUUID();
    return(

        <form>
            <h1>Nova Tarefa</h1>

            <div className="inputs">
                <label>Título:</label>
                <input type="text" maxLength={25} placeholder="Título" onChange={(event) => {setTitle(event.target.value)}}/>
                <label>Descrição:</label>
                <input type="text" placeholder="Descrição" onChange={(event) => {setDescription(event.target.value)}}/>
            </div>

            <div>
                <button type="button" onClick={() => {showForm(false)}}>Cancelar</button>
                <button type="button" onClick={() => {setCards([...cards, {id: newId, title: title, description: description,time: null, status: 1}]); showForm(false)}}>Adicionar</button>
            </div>

        </form>

    )

}

export default AddNewTask;