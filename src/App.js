import { useEffect, useState } from 'react';
import './App.css';
import Card from './Card';

function App() {
  const [firstCard,setFirstCard] = useState()
  const [secondCard,setSecondCard] = useState()
  const [cards,setCards] = useState([])
  const [disabled,setDisabled] = useState(false)
  const [turn,setTurn] = useState(0)

  const initGame = () => {
    const cards = 
        new Array(16)
            .fill()
            .map((_,i) => ({
                src : `/pix/0${i%8+1}.jpg`,
                revealed : false,
            }))
            .sort(() => Math.random() - .5)

    if (firstCard)
      setFirstCard()

    setTimeout(() =>setCards(cards),300)
    setTurn(0)
  }

  const updateRevealedCards = index => {
    if (disabled) return
    
    setTurn(turn+1)

    if (firstCard!==undefined)
        setSecondCard(index)
    else   
        setFirstCard(index)
  }

  useEffect(() => {
    if(firstCard!==undefined && secondCard!==undefined) {
      setDisabled(true)
      if (cards[firstCard].src === cards[secondCard].src){
        const updatedCards =
        cards.map((card,i) => ({
            ...card,
            revealed : card.revealed || i === firstCard || i === secondCard
        }))
        setCards(updatedCards)
        reset()
      }
      else{
        setTimeout(reset, 1000)

      }
    }
  }, [firstCard,secondCard,cards])

  const reset = () => {
    setFirstCard()
    setSecondCard()
    setDisabled(false)
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
           isRevealed = {
            card.revealed || 
            firstCard === i || 
            secondCard === i
          }
           updateRevealedCards={updateRevealedCards}/>
        ))}
      </div>
      <div className="controls">
        <button onClick={initGame}>New Game</button>
        <p>Turn: {turn}</p>
       </div>
    </div>
  );
}

export default App;
