import { useEffect, useState } from 'react';
import './App.css';
import Card from './Card';

function App() {
  const [firstCard,setFirstCard] = useState()
  const [secondCard,setSecondCard] = useState()
  const [cards,setCards] = useState([])

  const initGame = () => {
    const cards = 
        new Array(16)
            .fill()
            .map((_,i) => ({
                src : `/pix/0${i%8+1}.jpg`,
                revealed : false,
            }))
            .sort(() => Math.random() - .5)

    setCards(cards)
  }

  const updateRevealedCards = index => {
    if (firstCard)
        setSecondCard(index)
    else   
        setFirstCard(index)
  }

  useEffect(() => {
    if(firstCard!==undefined && secondCard!==undefined) {
      if (cards[firstCard].src === cards[secondCard].src){
        const updatedCards =
        cards.map((card,i) => ({
            ...card,
            revealed : card.revealed || i === firstCard || i === secondCard
        }))
        setCards(updatedCards)
        reset()
      }
    }
  }, [firstCard,secondCard,cards])

  const reset = () => {
    setFirstCard()
    setSecondCard()
  }

  useEffect(() => initGame(),[])
  return (
    <div className="App">
      <div className="grid">
        {cards.map((card,i) => (
           <Card 
           key={i}
           card={card} 
           index ={i}
           updateRevealedCards={updateRevealedCards}/>
        ))}
      </div>

    </div>
  );
}

export default App;
