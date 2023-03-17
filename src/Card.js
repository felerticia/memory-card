const Card = ({card,index,isRevealed,updateRevealedCards}) => {

    const handleClick = () => {
        updateRevealedCards(index)
    }

    return <div className={`card ${isRevealed ? 'is-revealed' : ''}`}>
        <div className="card__face card__face--front">
            <img src={card.src} alt="card-front"  />
        </div>
        <div className="card__face card__face--back">
            <img src="/pix/back.jpg" alt="card-back" onClick={handleClick}/>
        </div>
    </div>

}

export default Card