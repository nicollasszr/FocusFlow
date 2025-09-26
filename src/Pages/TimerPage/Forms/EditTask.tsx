import { useState, useContext } from "react";
import { CardContext } from "../Contexts/CardContext";
import '../Styles/Forms.css'

type Data = { attTitle: string, attDescription: string, cardId: string | number, showForm: Function }

function EditTask({ data }: { data: Data }) {

    const [title, setTitle] = useState(data.attTitle);
    const [description, setDescription] = useState(data.attDescription);

    const context = useContext(CardContext);
    if (!context) {return;}

    const { cards, setCards } = context;

    return (

        <form>
            <h1>Editar Tarefa</h1>

            <div>
                <label>Título:</label>
                <input
                    type="text"
                    placeholder="Título"
                    value={title}
                    onChange={(event) => { setTitle(event.target.value) }}
                />
                <label>Descrição:</label>
                <input
                    type="text"
                    placeholder="Descrição"
                    value={description}
                    onChange={(event) => { setDescription(event.target.value) }}
                />
            </div>

            <div>
                <button type="button" onClick={() => { data.showForm(false) }}>Cancelar</button>
                <button type="button" onClick={() => {
                    const updatedCards = cards.map((element) => {
                        if (element.id === data.cardId) {
                            return {
                                ...element,
                                title: title,
                                description: description,
                            };
                        }
                        return element;
                    });
                    
                    setCards(updatedCards);
                    data.showForm(false);
                }}>Confirmar</button>
            </div>

        </form>
    );
}

export default EditTask;