import { createContext, useState, type ReactNode } from "react";


interface PomodoroData{
    phase: string;
    setPhase: Function;
    cycleCount: number;
    setCycleCount: Function;
    focusTime: number;
    setFocusTime: Function;
    shortBreakTime: number;
    setShortBreakTime: Function;
    longBreakTime: number;
    setLongBreakTime: Function;
}

export const PomodoroContext = createContext<PomodoroData | undefined>(undefined);

function PomodoroContextProvider({children} : {children: ReactNode}){

    const [phase, setPhase] = useState('focus');
    const [cycleCount, setCycleCount] = useState(1);

    const [focusTime, setFocusTime] = useState(1500);
    const [shortBreakTime, setShortBreakTime] = useState(300);
    const [longBreakTime, setLongBreakTime] = useState(900);

    return(

        <PomodoroContext.Provider value={{phase, setPhase, cycleCount, setCycleCount, focusTime, setFocusTime, shortBreakTime, setShortBreakTime, longBreakTime, setLongBreakTime}}>
            {children}
        </PomodoroContext.Provider>

    )

}

export default PomodoroContextProvider;