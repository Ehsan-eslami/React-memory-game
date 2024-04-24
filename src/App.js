import Header from "./components/Header"
import Footer from "./components/Footer"
import Button from "./components/Button"
import Modal from "./components/Modal"
import SingleCard from "./components/SingleCards"
import './App.css'
import { useEffect, useState } from "react"

const cardImages = [
  {"src" : "images/Image=Cherry.png", matched: false },
  {"src" : "images/Image=Dog.png", matched: false },
  {"src" : "images/Image=Dolphin.png", matched: false },
  {"src" : "images/Image=Fire.png", matched: false },
  {"src" : "images/Image=Globe.png", matched: false },
  {"src" : "images/Image=Lion.png", matched: false },
  {"src" : "images/Image=Lock.png", matched: false },
  {"src" : "images/Image=Party.png", matched: false },
  {"src" : "images/Image=Piano.png", matched: false },
  {"src" : "images/Image=Pizza.png", matched: false },
  {"src" : "images/Image=Present.png", matched: false },
  {"src" : "images/Image=Silly.png", matched: false },
  {"src" : "images/Image=Sunflower.png", matched: false },
  {"src" : "images/Image=Target.png", matched: false },
  {"src" : "images/Image=Top hat.png", matched: false },
  {"src" : "images/Image=Umbrella.png", matched: false },
]


function App() {
  //states 
  const [cards, setCards] = useState([])
  const [turns , setTurns] = useState(0)
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)
  const [disabled, setDisabled] = useState(false)
  const [modal, setModal] =useState(false)
  const [situation, setSituation] = useState('')
  
  
  //compare choices 
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true)
      if (choiceOne.src === choiceTwo.src) {
        setCards(prevCards => {
          return prevCards.map(card => {
            if (card.src === choiceOne.src) {
              return {...card, matched: true}
            } else {
              return card
            }
          })
        })
        resetTurn()
      } else {
        setTimeout(() => resetTurn(), 1000)            
      }
    }
  
  }, [choiceOne, choiceTwo])

  useEffect(() =>{
    shuffleCard()
  }, [])

  useEffect(() => {
    const allMatched = cards.every((card) => card.matched === true )
    if (allMatched) {
      handleSituation()
      setModal(true);
    } else {
      setModal(false); 
    }
  }, [cards])
  
  //functions
  const shuffleCard = ()=>{
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(()=> Math.random() - 0.5)
      .map((card) => ({...card, id:Math.floor(Math.random() * 10000000 * 89 ^ 356 / 41).toString(15)}));

    setChoiceOne(null)
    setChoiceTwo(null)
    setCards(shuffledCards)
    setTurns(0)
  }

  //handle choice
  const handleChoice =(card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }

  // reset choices and increase turn count
  const resetTurn =() => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(prevTurn => prevTurn + 1)
    setDisabled(false)
  }

  const handleSituation = () => {
    if (turns < 30 ) {
        setSituation('Amazing!!')
    } else if (turns < 40 ) { 
        setSituation('Great!!')
    } else if (turns < 50 ) {
        setSituation("Good Job!!")
    } else {
        setSituation('You need to try more')
    }
}



  const closeModal = () => { 
    setModal(false)
  }


  return (
    <div className="App overflow-x-hidden"> 
      <Header />
      <div className="flex justify-center gap-4 container mt-10">
        <Button title="New Game" func={shuffleCard} />
        <p className="shadow-[2px_2px_1px_2px_rgba(0,150,255,1)] rounded text-xs sm:text-lg md:text-xl py-2 px-4">Turns: {turns}</p>
      </div>
      <br />
      <div className="container grid grid-cols-2 sm:grid-cols-4  lg:grid-cols-8 gap-6 max-w-screen ">
        {
          cards.map((card) => (
            <SingleCard 
              key={card.id}
              card={card}
              handleChoice={handleChoice}
              flipped={card === choiceOne || card === choiceTwo || card.matched}
              disabled={disabled}
            />
          ))
        }
      </div>
      <br />
      <br />
      <br />
      <Footer />
      <div>
        {
          modal &&
           (
            <Modal func={closeModal}>
              <h3 className=" text-base sm:text-xl  md:text-3xl font-semibold">Congratulation!!🥳🏆🥇</h3>
              <br />
              <h4 className=" text-sm sm:text-lg md:text-2xl font-medium">You've done 
                <span className="font-bold ml-2  text-blue-700">
                  {situation}
                </span>
              </h4>
              <br />
              <h4 className=" text-sm sm:text-lg md:text-2xl font-medium">You've finished in
                <span className="font-bold ml-2  text-blue-700">
                  {turns}
                </span> moves
              </h4>
              <br />
              <Button title="New Game" func={shuffleCard} />
            </Modal>)
        }
      </div>
    </div>
  );
}

export default App;
