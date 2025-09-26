import { useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import ExcludeTask from "../Forms/ExcludeTask";
import EditTask from "../Forms/EditTask";
import '../Styles/Card.css'
import UserFinishTask from "../Forms/UserFinishTask";

type status =  1 | 2 | 3

type CardData = {id: number, title: string, description: string, time: number | null, status: status}

function Card({item} : {item: CardData}){

    const [showDeleteTask, setShowDeleteTask] = useState(false);
    const [showEditTask, setShowEditTask] = useState(false);
    const [showFinishTask, setShowFinishTask] = useState(false);


    const formatTime = (seconds: number) => {
        if (seconds > 59){
            const hours = Math.floor(seconds / 3600);
            const minutes = Math.floor((seconds % 3600) / 60);       
            const remainingSeconds = seconds % 60;                   
    
            return `${hours.toString().padStart(2,'0')}:${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
        }
        else{
            return `${seconds}s`
        }
    };

    return(

         <>
            {showDeleteTask ?
            (
                <ExcludeTask cardId={item.id} setShowForm={setShowDeleteTask} />
            )
            :
            showEditTask ?
            (
                <EditTask
                    data={{
                        attTitle: item.title,
                        attDescription: item.description,
                        cardId: item.id,
                        showForm: setShowEditTask,
                    }}
                />
            )
            :
            showFinishTask?
            (
                <UserFinishTask data={{cardId: item.id, setShowForm: setShowFinishTask}}/>
            )
            :
            (
                <div className="card">
                    <div className="card-header">
                        <h2>{item.title}</h2>
                        <div className="card-header-inputs">
                            {item.status === 1?
                                <>
                                <button onClick={() => { setShowEditTask(true); }}>
                                    <FaEdit size={20}/>
                                </button>
                                <button onClick={() => { setShowDeleteTask(true); }}>
                                    <FaTrashAlt size={20}/>
                                </button>
                                </>
                            :
                            item.status === 2?
                                <>
                                <button onClick={() => { setShowDeleteTask(true); }}>
                                    <FaTrashAlt size={20}/>
                                </button>
                                <button onClick={() => { setShowFinishTask(true); }}>Terminar</button>
                                </>
                            :
                                <button onClick={() => { setShowDeleteTask(true); }}>
                                    <FaTrashAlt size={20}/>
                                </button>
                            }
                        </div>
                    </div>
                    <hr></hr>
                    <div className="card-info">
                        <p>{item.description}</p>
                        {item.time? <p>{formatTime(item.time)}</p> : null}
                    </div>
                </div>
            )}
        </>
    )

}

export default Card;