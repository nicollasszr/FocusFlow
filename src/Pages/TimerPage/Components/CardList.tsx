import { useContext } from "react";
import { CardContext } from "../Contexts/CardContext";
import { DragDropContext, Droppable} from "@hello-pangea/dnd"
import Card from "./Card";
import '../Styles/CardList.css'

//+===Funções===+

//Função que reorganiza a lista após a ação de drag and drop
function reOrder<T>(list: T[], startIndex: number, endIndex: number){
    const result = Array.from(list);

    const [removed] = result.splice(startIndex, 1);

    result.splice(endIndex, 0, removed)

    return result;
}


function CardList({ requiredId} : {requiredId : number}){
    
    //+===Context===+

    const context = useContext(CardContext);
    if (!context){return;}
    const { cards, setCards } = context;
    
    //+===Funções===+

    //Reorganiza a lista após o drag and drop
    function onDragEnd(result: any){
    
        if (!result.destination){return;}
        
        const currentFilteredCards = cards.filter((element) => element.status === requiredId);

        const reorderedFilteredCards = reOrder(
            currentFilteredCards, 
            result.source.index, 
            result.destination.index
        );

        const newCards = cards
            .filter(element => element.status !== requiredId)
            .concat(reorderedFilteredCards);
        
        setCards(newCards);
    }

    //+===Componente===+

    return(

        <div className="card-list">
            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="taskList" type="list" direction="vertical">
                    {(provided) =>( 
                        <ul ref={provided.innerRef} {...provided.droppableProps}>
                            {cards.filter((element) => {return element.status === requiredId}).map((element, index) => (<li key={element.id}><Card item={element} index={index}/></li>))}
                            {provided.placeholder}
                        </ul>
                    )}
                </Droppable>
            </DragDropContext>
        </div>

    )

}

export default CardList;