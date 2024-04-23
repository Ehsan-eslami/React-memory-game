import Header from "./components/Header"
import Button from "./components/Button"
import './App.css'
import { useState } from "react"

const cardImages = [
  {"src" : "../public/images/Image=Cherry.png"},
  {"src" : "../public/images/Image=Dog.png"},
  {"src" : "../public/images/Image=Dolphin.png"},
  {"src" : "../public/images/Image=Fire.png"},
  {"src" : "../public/images/Image=Globe.png"},
  {"src" : "../public/images/Image=Lion.png"},
  {"src" : "../public/images/Image=Lock.png"},
  {"src" : "../public/images/Image=Party.png"},
  {"src" : "../public/images/Image=Piano.png"},
  {"src" : "../public/images/Image=Pizza.png"},
  {"src" : "../public/images/Image=Present.png"},
  {"src" : "../public/images/Image=Silly.png"},
  {"src" : "../public/images/Image=Sunflower.png"},
  {"src" : "../public/images/Image=Target.png.png"},
  {"src" : "../public/images/Image=Top hat.png"},
  {"src" : "../public/images/Image=Umbrella.png"},
]


function App() {
  //states 
  const [cards, setCards] = useState([])
  const [turns , setTurns] = useState(0)
  //functions
  const shuffleCard = ()=>{
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(()=> Math.random() - 0.5)
      .map((card) => ({...card, id:Math.floor(Math.random() * 10000000 * 89 ^ 356 / 41).toString(15)}));

    setCards(shuffledCards)
    setTurns(0)
    console.log(cards)
  }

  
  return (
    <div className="App"> 
      <Header />
      <div className="container mt-10">
        <Button title="New Game" func={shuffleCard} />
      </div>
    </div>
  );
}

export default App;
