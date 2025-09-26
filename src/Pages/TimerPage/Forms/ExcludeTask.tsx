import { useContext } from "react";
import { CardContext } from "../Contexts/CardContext";
import '../Styles/Forms.css'

interface Data{
    cardId: number;
    setShowForm: Function;

}

function ExcludeTask( {cardId, setShowForm}: Data){

    const context = useContext(CardContext);
    if (!context) {return};
    const { cards, setCards } = context;

    return(

        <form>
            <h1>Tem certeza?</h1>
            <p>Esta ação irá excluir a tarefa definitivamente</p>
            <div>
                <button type="button" onClick={() => {setShowForm(false)}}>Cancelar</button>
                <button type="button" onClick={() => {setCards(cards.filter((element) => {return element.id != cardId})); setShowForm(false)}}>Confirmar</button>
            </div>
        </form>

    )

}

export default ExcludeTask;