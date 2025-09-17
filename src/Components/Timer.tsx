import { useState, useEffect } from "react";
import '../Styles/Timer.css'

interface Props {
  setShowFormEnd: Function;
  setResetTimer: Function;
  setAddTime: (fn: () => void) => void;
}



function Timer(props: Props){

    let [hours, setHours] = useState(1);
    let [minutes, setMinutes] = useState(0);
    let [seconds, setSeconds] = useState(0);
    let [isRunning, setIsRunning] = useState(false);
    let [isEditing, setIsEditing] = useState(true);

    function resetTimer() {
        setHours(1);
        setMinutes(0);
        setSeconds(0);
        setIsRunning(false);
        setIsEditing(true);
    }

    function addThirtyMinutes() {
    setHours(prevHours => {
        setMinutes(prevMinutes => {
        setSeconds(prevSeconds => {
            let totalSeconds = prevHours * 3600 + prevMinutes * 60 + prevSeconds + 30 * 60;

            const newHours = Math.floor(totalSeconds / 3600);
            const newMinutes = Math.floor((totalSeconds % 3600) / 60);
            const newSeconds = totalSeconds % 60;

            setHours(newHours);
            setMinutes(newMinutes);
            setSeconds(newSeconds);
            setIsRunning(true);

            return newSeconds;
        });
        return prevMinutes;
        });
        return prevHours; 
    });
    }

    useEffect(() => {
        props.setAddTime(() => addThirtyMinutes);
        props.setResetTimer(() => resetTimer); // novo
    }, []);

    useEffect(() => {
        props.setAddTime(() => addThirtyMinutes);
        }, []);


    useEffect(() => {
        if (!isRunning) return;
        setIsEditing(false)

        const interval = setInterval(() => {
            if (hours === 0 && minutes === 0 && seconds === 0) {
                setIsRunning(false);
                setIsEditing(true);
                clearInterval(interval);
                props.setShowFormEnd(true)
                return;
            }

            if (seconds === 0) {
                if (minutes > 0) {
                    setMinutes(value => value - 1);
                    setSeconds(59);
                } else if (hours > 0) {
                    setHours(value => value - 1);
                    setMinutes(59);
                    setSeconds(59);
                }
            } else {
                setSeconds(value => value - 1);
            }
            
        }, 1000);

        return () => (clearInterval(interval), setIsEditing(true));
    }, [isRunning, hours, minutes, seconds]);

    return(

        <div className="timer">
            <h3>
                {hours.toString().padStart(2, '0')}:
                {minutes.toString().padStart(2, '0')}:
                {seconds.toString().padStart(2, '0')}
            </h3>

            <div className="controls">
                <button onClick={() => setIsRunning(true)}>Start</button>
                <button onClick={() => setIsRunning(false)}>Pause</button>
            </div>
            
            {isEditing && 
                <div className="inputs">
                    <input
                        type="number"
                        value={hours}
                        onChange={(event) => setHours(Number(event.target.value))}
                        min={0}
                    /> :
                    <input
                        type="number"
                        value={minutes}
                        onChange={(event) => setMinutes(Number(event.target.value))}
                        min={0} max={59}
                    /> :
                    <input
                        type="number"
                        value={seconds}
                        onChange={(event) => setSeconds(Number(event.target.value))}
                        min={0} max={59}
                    />
                </div>
            }
        </div>

    )
}



export default Timer;
