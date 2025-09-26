import { createContext, useEffect, useState } from "react";

type status =  1 | 2 | 3

type CardData = {id: number, title: string, description: string, time: string | null, status: status}

interface ContextType {
  cards: CardData[];
  setCards: Function;
}

export const CardContext = createContext<ContextType | undefined>(undefined);

function CardContextProvider({ children }: { children: React.ReactNode }) {

  const [cards, setCards] = useState<CardData[]>([]);

  useEffect(() => {
      
      const cardsStatus1 = cards.filter((card) => card.status === 1);
      const cardsStatus2 = cards.filter((card) => card.status === 2);

      
      if (cardsStatus1.length > 0 && cardsStatus2.length === 0) {
          
          const cardParaPromover = cardsStatus1[0];

          
          const novaListaDeCards = cards.map((card) => {
              
              if (card.id === cardParaPromover.id) {
                  
                  return { ...card, status: 2 as status };
              }
              return card;
          });

          setCards(novaListaDeCards);
      }
  }, [cards, setCards]);



  return (
    <CardContext.Provider value={{ cards, setCards }}>
      {children}
    </CardContext.Provider>
  )

}

export default CardContextProvider;
