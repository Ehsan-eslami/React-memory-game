import './SingleCard.css'

export default function SingleCard({card, handleChoice, flipped, disabled}) {

    const handleClick = () => {
        if(!disabled){
            handleChoice(card)
        }
    }

    return (
        <div className='card shadow-[2px_2px_1px_2px_rgba(0,50,55,1)] rounded-lg md:rounded-lg lg:rounded-lg  hover:shadow-[1px_1px_1px_2px_rgba(0,150,255,1)] active:shadow-none active:border active:border-blue-500 duration-300 '>
            <div className={flipped ? 'flipped' : ''}>
                <img className='front p-5  rounded-lg' src={card.src} alt="card front" />
                <img
                    className='back rounded-lg p-2'
                    onClick={handleClick}
                    src="images/cover.png"
                    alt="card back"
                />
            </div>
        </div>
    )
}