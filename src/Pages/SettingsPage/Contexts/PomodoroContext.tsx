import { createContext, useState, type ReactNode } from "react";


interface PomodoroData{
    phase: string;
    setPhase: Function;
    cycleCount: number;
    setCycleCount: Function;
}

export const PomodoroContext = createContext<PomodoroData | undefined>(undefined);

function PomodoroContextProvider({children} : {children: ReactNode}){

    const [phase, setPhase] = useState('focus');
    const [cycleCount, setCycleCount] = useState(1)


    return(

        <PomodoroContext.Provider value={{phase, setPhase, cycleCount, setCycleCount}}>
            {children}
        </PomodoroContext.Provider>

    )

}

export default PomodoroContextProvider;