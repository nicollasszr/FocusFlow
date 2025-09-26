import { useState } from "react";
import CardList from "../TimerPage/Components/CardList";
import AddNewTask from "../TimerPage/Forms/AddNewTask";
import { MdAddCircle } from "react-icons/md";
import "../TimerPage/Styles/TimerPage.css"
import Timer from "../TimerPage/Components/Timer";
import FinishTask from "../TimerPage/Forms/FinishTask";

function TimerPage(){

    const [showNewTask, showAddNewTask] = useState(false);
    const [showFinishTask, setShowFinishTask] = useState(false);

    return(

        <main className="timer-page">

            <section>
                <h1>Tarefas Pendentes</h1>
                {showNewTask? <AddNewTask showForm={showAddNewTask}/>
                :
                <button className="new-task-button" onClick={() => {showAddNewTask(true)}}> <MdAddCircle size={40}/> </button>}

                <CardList requiredId={1}/>
            </section>

            <section className="timer-column">
                
                <div className="timer-column-timer-box">
                    <Timer data={ { setShowForm: setShowFinishTask} }/>
                </div>
                {showFinishTask? <FinishTask setShowForm={setShowFinishTask}/> : null}
                <div className="timer-column-info-box">
                    <h1>Tarefa Atual</h1>
                    <CardList requiredId={2}/>
                </div>

            </section>

            <section>
                <h1>Tarefas Concluidas</h1>
                <CardList requiredId={3}/>
            </section>


        </main>
        
    )
    
}

export default TimerPage;