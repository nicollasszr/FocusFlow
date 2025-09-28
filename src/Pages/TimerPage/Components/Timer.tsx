import  { useEffect, useContext } from 'react';
import { FaPlay, FaPause, FaSquare  } from "react-icons/fa";
import '../Styles/Timer.css'
import { TimeContext } from '../Contexts/TimeContext';

interface DataTimer{
    setShowForm: Function;
}

function CountdownTimer({ data } : { data : DataTimer}) {

    const context = useContext(TimeContext);
    if (!context){return;}
    const { isRunning, setIsRunning, setPassedTime, timeRemaining, setTimeRemaining } = context;

    /*UseEffect que faz a magia acontecer*/
    useEffect(() => {
    let timerId: number;

    if (isRunning && timeRemaining > 0) {              //Verifica se está ativado e tem tempo pra correr
        timerId = setInterval(() => {                    //Cria o setInterval
        setTimeRemaining((prevTime: number) => prevTime - 1);
        setPassedTime((prevTime: number) => prevTime + 1)  
        document.title = formatTime(timeRemaining-1)
        }, 1000);
    } else if (timeRemaining === 0) {
        if(isRunning){
            data.setShowForm(true);
        }                                                          //Se não tiver mais tempo ele vai parar
        setIsRunning(false);
         
    }

    return () => {clearInterval(timerId)};               //Se não entrar nos de cima ele vai resetar o interval
    }, [isRunning, timeRemaining]);                      //Dependências pra rodar, se está ativo e se tem tempo


    /*Função pra resetar o timer*/
    const resetTimer = () => {
    setIsRunning(false);
    setTimeRemaining(3600);
    setPassedTime(0);
    document.title = "FocusFlow | Deixe seu foco fluir"
    };

    /*Formatação do tempo*/
    const formatTime = (seconds: number) => {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);       
        const remainingSeconds = seconds % 60;                   

        return `${hours.toString().padStart(2,'0')}:${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
    };

    const hours = Math.floor(timeRemaining / 3600);
    const minutes = Math.floor((timeRemaining % 3600) / 60);       
    const remainingSeconds = timeRemaining % 60;    
    return (
   
    <div className="timer">
        <h1>{formatTime(timeRemaining)}</h1>
        {
            !isRunning?

            <div className="inputs">
                <input type="number" min={0} max={23} placeholder="HH" value={hours} onChange={(event) => { const newHours = parseInt(event.target.value) || 0; const newTimeRemaining = (newHours * 3600) + (minutes * 60) + remainingSeconds; setTimeRemaining(newTimeRemaining); }}/>
                <input type="number" min={0} max={59} placeholder="MM" value={minutes} onChange={(event) => { const newMinutes = parseInt(event.target.value) || 0; const newTimeRemaining = (hours * 3600) + (newMinutes * 60) + remainingSeconds; setTimeRemaining(newTimeRemaining); }} />
                <input type="number" min={0} max={59} placeholder="SS" value={remainingSeconds} onChange={(event) => { const newSeconds = parseInt(event.target.value) || 0; const newTimeRemaining = (hours * 3600) + (minutes * 60) + newSeconds; setTimeRemaining(newTimeRemaining); }}/>
            </div>
            :
            null
        }
        <div className="buttons">
            <button onClick={() => setIsRunning(!isRunning)}> {isRunning? <FaPause size={20}/> : <FaPlay size={20}/> } </button>
            <button onClick={resetTimer}> <FaSquare size={20}/> </button>
        </div>
    </div>
    );
}

export default CountdownTimer;
