import { useContext } from "react";
import { CardContext } from "../Contexts/CardContext";
import Card from "./Card";
import '../Styles/CardList.css'

function CardList({ requiredId} : {requiredId : number}){

    const context = useContext(CardContext);

    if (!context){return}

    const { cards } = context;


    return(

        <div className="card-list">
            <ul>
                {cards.filter((element) => {return element.status === requiredId}).map((element) => (<li key={element.id}><Card item={element}/></li>))}
            </ul>
        </div>

    )

}

export default CardList;