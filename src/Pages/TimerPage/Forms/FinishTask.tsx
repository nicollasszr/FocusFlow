import { useContext } from "react";
import { CardContext } from "../Contexts/CardContext";
import { TimeContext } from "../Contexts/TimeContext";
import { PomodoroContext } from '../../SettingsPage/Contexts/PomodoroContext';


function FinishTask({setShowForm} : {setShowForm : Function}){

    //+===Contextos===+

    //Contexto de manipulação da lista de cards
    const Cardcontext = useContext(CardContext);
    if (!Cardcontext){return;}
    const {cards, setCards} = Cardcontext;
    
    //Contexto de manipulação do timer
    const Timecontext = useContext(TimeContext);
    if (!Timecontext){return;}
    const {passedTime, setPassedTime, setTimeRemaining, setIsRunning} = Timecontext;

    //Contexto de manipulação das pausas
    const Pomodorocontext = useContext(PomodoroContext);
    if (!Pomodorocontext){return;}
    const { setPhase, cycleCount, setCycleCount} = Pomodorocontext;

    //+===Funções===+

    //Pega o card correto (Com status 2)
    const currentCard = cards.filter((elemento) => (elemento.status === 2));

    //Recria a lista de cards mas alterando o status do card atual
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

    //Verifica o ciclo e seta a fase e tempo de pausa
    const startNextBreak = () => {
        if (cycleCount < 4){
            setCycleCount((prev: number) => (prev + 1));
        }
        else{
            setCycleCount(1);
        }

        if (cycleCount === 4) { 
            setPhase('longBreak');
            setTimeRemaining(900); // 15 minutos
        } else {
            setPhase('shortBreak');
            setTimeRemaining(300); // 5 minutos
        }
        
        setIsRunning(false); 
    };

    //Pula uma pausa e atualiza o ciclo
    const continueFocus = () => {
        const nextCycleCount = cycleCount < 4 ? cycleCount + 1 : 1; 
        setCycleCount(nextCycleCount);

        setPhase('focus');
        setTimeRemaining(1500);
        
        setIsRunning(true);
    };

    //+===Componente===+

    return(
        <form>
            <h1>Tempo Encerrado!</h1>
            <p>A tarefa foi finalizada?</p>
            <div>
                <button type="button" onClick={() => {setShowForm(false); continueFocus(); setIsRunning(true)}}>Ainda não</button>
                <button type="button" onClick={() => {setCards(updatedCards); startNextBreak(); setShowForm(false); setPassedTime(0); document.title = "FocusFlow | Deixe seu foco fluir"}}>Sim</button>
            </div>
        </form>
    )

}

export default FinishTask;