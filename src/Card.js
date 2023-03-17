const Card = ({card,index,updateRevealedCards}) => {

    const handleClick = () => {
        updateRevealedCards(index)
    }

    return <div class={`card`}>
            <div class="card__face card__face--front">
                <img src={card.src} alt="card-front"  />
            </div>
            <div class="card__face card__face--back">
                <img src="/pix/back.jpg" alt="card-back" onClick={handleClick}/>
            </div>
        </div>

}

export default Card