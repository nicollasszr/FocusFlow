import { useContext } from "react";
import { CardContext } from "../Contexts/CardContext";

interface Data{
    cardId: number; 
    setShowForm: Function;
}

function UserFinishTask({data} : {data: Data}){

    //+===Contexto===+

    //Contexto de manipulação da lista de cards
    const context = useContext(CardContext);
    if (!context){return;} 
    const { cards, setCards } = context;

    //+===Funções===+

    //Pega o card correto (Com status 2)
    const currentCard = cards.filter((elemento) => (elemento.status === 2));

    //Recria a lista de cards mas alterando o status do card atual
    const updatedCards = cards.map((card) =>{
        if (currentCard[0].id === card.id){
            return{
                ...card,
                status: 3,
            }
        }
        return card;
    })

    //+===Componente===+

    return(
        <form>
            <h1>Tem certeza?</h1>
            <p>Esta ação irá terminar a tarefa imediatamente</p>
            <div>
                <button type="button" onClick={() => {data.setShowForm(false)}}>Cancelar</button>
                <button type="button" onClick={() => {setCards(updatedCards)}}>Confirmar</button>
            </div>
        </form>
    )

}

export default UserFinishTask;