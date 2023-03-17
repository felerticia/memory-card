import { useEffect, useState } from 'react';
import './App.css';
import Card from './Card';

function App() {
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
  const updateRevealedCards = i => console.log(i);

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
