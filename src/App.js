import { useEffect, useState } from 'react';
import './App.css';

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

  useEffect(() => initGame(),[])
  return (
    <div className="App">
      <div className="grid">
        {cards.map((card,i) => (
          <div class={`card`}>
            <div class="card__face card__face--front">
                <img src={card.src} alt="card-front"  />
            </div>
            <div class="card__face card__face--back">
                <img src="/pix/back.jpg" alt="card-back"/>
            </div>
        </div>
        ))}
      </div>

    </div>
  );
}

export default App;
