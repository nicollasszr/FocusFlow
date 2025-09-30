import { useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { Draggable } from "@hello-pangea/dnd"
import ExcludeTask from "../Forms/ExcludeTask";
import EditTask from "../Forms/EditTask";
import '../Styles/Card.css'
import UserFinishTask from "../Forms/UserFinishTask";

interface CardData{
    item : { id: number, title: string, description: string, time: number | null, status: number }
    , index: number}

function Card( props: CardData){

    //+===Estado===+

    const [showDeleteTask, setShowDeleteTask] = useState(false);
    const [showEditTask, setShowEditTask] = useState(false);
    const [showFinishTask, setShowFinishTask] = useState(false);

    //+===Funções===+

    //Formata o tempo para ser exibido no card
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

    //+===Componente===+

    return(

         <>
            {showDeleteTask ?
            (
                <ExcludeTask cardId={props.item.id} setShowForm={setShowDeleteTask} />
            )
            :
            showEditTask ?
            (
                <EditTask
                    data={{
                        attTitle: props.item.title,
                        attDescription: props.item.description,
                        cardId: props.item.id,
                        showForm: setShowEditTask,
                    }}
                />
            )
            :
            showFinishTask?
            (
                <UserFinishTask data={{cardId: props.item.id, setShowForm: setShowFinishTask}}/>
            )
            :
            (
                <Draggable draggableId={props.item.id.toString()} index={props.index}>

                    {(provided) => (
                            <div className="card" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                <div className="card-header">
                                    <h2>{props.item.title}</h2>
                                    <div className="card-header-inputs">
                                        {props.item.status === 1?
                                            <>
                                            <button onClick={() => { setShowEditTask(true); }}>
                                                <FaEdit size={20}/>
                                            </button>
                                            <button onClick={() => { setShowDeleteTask(true); }}>
                                                <FaTrashAlt size={20}/>
                                            </button>
                                            </>
                                        :
                                        props.item.status === 2?
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
                                    <p>{props.item.description}</p>
                                    {props.item.time? <p>{formatTime(props.item.time)}</p> : null}
                                </div>
                            </div>
                    )}
                
                </Draggable>
            )}
        </>
    )

}

export default Card;