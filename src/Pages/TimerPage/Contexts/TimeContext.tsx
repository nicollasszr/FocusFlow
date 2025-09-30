import { createContext, useState, type ReactNode } from "react";

interface ContextType{
    isRunning: boolean;
    setIsRunning: Function;
    passedTime: number;
    setPassedTime: Function;
    timeRemaining: number;
    setTimeRemaining: Function;

}

export const TimeContext = createContext<ContextType | undefined>(undefined);

function TimeContextProvider({children} : {children : ReactNode}){

    const [isRunning, setIsRunning] = useState(false);
    const [passedTime, setPassedTime] = useState(0);
    const [timeRemaining, setTimeRemaining] = useState(1500)

    return(
        <TimeContext.Provider value={{isRunning, setIsRunning, passedTime, setPassedTime, timeRemaining, setTimeRemaining}}>
            {children}
        </TimeContext.Provider>
    )


}

export default TimeContextProvider;