import { useContext } from "react";
import { CardContext } from "../Contexts/CardContext";
import { TimeContext } from "../Contexts/TimeContext";


function FinishTask({setShowForm} : {setShowForm : Function}){

    const context = useContext(CardContext);
    if (!context){return;}
    const {cards, setCards} = context;
    
    const Context = useContext(TimeContext);
    if (!Context){return;}
    const {passedTime, setPassedTime, setTimeRemaining, setIsRunning} = Context;

    const currentCard = cards.filter((elemento) => (elemento.status === 2));

    const updatedCards = cards.map((card) =>{
        if (currentCard[0].id === card.id){
            return{
                ...card,
                status: 3,
                time: passedTime,
            }
        }
        return card;
    })

    return(
        <form>
            <h1>Tempo Encerrado!</h1>
            <p>A tarefa foi finalizada?</p>
            <div>
                <button type="button" onClick={() => {setShowForm(false); setTimeRemaining(900); setIsRunning(true)}}>Ainda não</button>
                <button type="button" onClick={() => {setCards(updatedCards); setTimeRemaining(3600); setShowForm(false); setPassedTime(0)}}>Sim</button>
            </div>
        </form>
    )

}

export default FinishTask;