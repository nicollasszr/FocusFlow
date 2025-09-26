import { useContext } from "react"; // <--- Importe useContext
import { CardContext } from "../Contexts/CardContext"; // <--- Importe o Contexto

interface Data{
    // Mude status para cardId
    cardId: number; 
    setShowForm: Function;
}

function UserFinishTask({data} : {data: Data}){

    const context = useContext(CardContext);

    // Se o contexto não existir, não faça nada (proteção)
    if (!context) { return null; } 

    const { cards, setCards } = context;

    const handleFinish = () => {
        
        // 1. Crie um NOVO array com o card modificado
        const novaListaDeCards = cards.map(card => {
            if (card.id === data.cardId) {
                // 2. Retorna um NOVO objeto card com o status 3
                return { ...card, status: 3 }; 
            }
            return card;
        });

        // 3. Atualize o estado global
        setCards(novaListaDeCards);
        
        // 4. Feche o formulário
        data.setShowForm(false);
    }

    return(
        <form>
            <h1>Tem certeza?</h1>
            <p>Esta ação irá terminar a tarefa imediatamente</p>
            <div>
                <button type="button" onClick={() => {data.setShowForm(false)}}>Cancelar</button>
                <button type="button" onClick={handleFinish}>Confirmar</button>
            </div>
        </form>
    )

}

export default UserFinishTask;