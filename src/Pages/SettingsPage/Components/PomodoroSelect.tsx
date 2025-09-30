import { useContext, useState } from "react";
import { PomodoroContext } from "../Contexts/PomodoroContext";

function PomodoroSelect(){

    const [time, setTime] = useState('1500_300_900');
    

    const context = useContext(PomodoroContext);
    if (!context){return;}
    const { setFocusTime, setShortBreakTime, setLongBreakTime } = context;

     const changeTime = (event: React.ChangeEvent<HTMLSelectElement>) =>{
        const value = event.target.value;
        setTime(value);

        const [focusStr, shortBreakStr, longBreakStr] = value.split('_');

        setFocusTime(parseInt(focusStr, 10));
        setShortBreakTime(parseInt(shortBreakStr, 10));
        setLongBreakTime(parseInt(longBreakStr, 10));
    }

    return(

        <select value={time} onChange={changeTime}>
            <option value={'1500_300_900'} title="25min/5min/15min">Clássico</option>
            <option value={'900_180_600'} title="15min/3min/10min">Curto</option>
            <option value={'2700_600_1800'} title="45min/10min/30min">Intenso</option>
        </select>

    )

}

export default PomodoroSelect;