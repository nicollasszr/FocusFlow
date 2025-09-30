import  { useEffect, useContext } from 'react';
import { FaPlay, FaPause, FaSquare  } from "react-icons/fa";
import '../Styles/Timer.css'
import { TimeContext } from '../Contexts/TimeContext';
import { PomodoroContext } from '../../SettingsPage/Contexts/PomodoroContext';

interface DataTimer{
    setShowForm: Function;
}

function CountdownTimer({ data } : { data : DataTimer}) {

    //+===Contexto===+

    //Contexto de manipulação do timer
    const Timecontext = useContext(TimeContext);
    if (!Timecontext){return;}
    const { isRunning, setIsRunning, setPassedTime, timeRemaining, setTimeRemaining } = Timecontext;

    const Pomodorocontext = useContext(PomodoroContext);
    if (!Pomodorocontext){return;}
    const { phase, setPhase, focusTime } = Pomodorocontext;

    //+===Efeitos===+

    //A cada segundo atualiza os valores internos e exibidos, fazendo o timer funcionar. Quando zera exibe o formulário
    useEffect(() => {
    let timerId: number;

    if (isRunning && timeRemaining > 0) {
        timerId = setInterval(() => {
        setTimeRemaining((prevTime: number) => prevTime - 1);
        setPassedTime((prevTime: number) => prevTime + 1)  
        document.title = formatTime(timeRemaining-1)
        }, 1000);
    } else if (timeRemaining === 0) {
        if(isRunning){
            if (phase === 'focus') {
                 data.setShowForm(true); 
            } else {
                setPhase('focus');
                setTimeRemaining(focusTime);
            }
        }                                                          
        setIsRunning(false); 
         
    }

    return () => {clearInterval(timerId)};               
    }, [isRunning, timeRemaining, phase, focusTime, setPhase, data.setShowForm]);                      

    //+===Funções===+

    //Reseta o tempo interno e exibido e faz o título da janela voltar ao padrão
    const resetTimer = () => {
    setIsRunning(false);
    setTimeRemaining(focusTime);
    setPassedTime(0);
    document.title = "FocusFlow | Deixe seu foco fluir"
    };

    //Altera o tempo interno para a formatação padrão para exibir
    const formatTime = (seconds: number) => {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);       
        const remainingSeconds = seconds % 60;                   

        return `${hours.toString().padStart(2,'0')}:${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
    };

    //Valores para exibir no input
    const hours = Math.floor(timeRemaining / 3600);
    const minutes = Math.floor((timeRemaining % 3600) / 60);       
    const remainingSeconds = timeRemaining % 60;    

    //+===Componente===+

    return (
   
    <div className="timer">
        {phase === 'shortBreak' || phase === 'longBreak' ? <h4>Pausa</h4> : null}
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
