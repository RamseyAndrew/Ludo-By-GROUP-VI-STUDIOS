import { useState } from "react"
import "./App.css"
import TurnManager from "./TurnManager"
import captureLogic from "./TokenCapture"
import useCaptureLogic from "./TokenCapture"

const players = ["Red", "Blue", "Green", "Yellow"]

function App(){
    const [diceValue, setDiceValue] = useState(1)
    const [rolling, setRolling] = useState(false)
    const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0)
    const {moveToken, positions} = useCaptureLogic()

    const rollDice = () => {
        if (rolling) return;
        setRolling(true)

        const newValue = Math.floor(Math.random()*6 + 1)
        setTimeout(() => {
            setDiceValue(newValue)
            const currentPlayer = players[currentPlayerIndex];
            setRolling(false)
            nextTurn()
            moveToken(currentPlayer, newValue)
        }, 300)
    };

    const nextTurn = () => {
      setCurrentPlayerIndex((prevIndex) => (prevIndex + 1) % 4)
    }

     const getRotation = (value) => {
    switch (value) {
      case 1: return "rotateX(0deg) rotateY(0deg)"
      case 2: return "rotateX(-180deg) rotateY(0deg)"
      case 3: return "rotateY(-90deg)"
      case 4: return "rotateY(90deg)"
      case 5: return "rotateX(-90deg)"
      case 6: return "rotateX(90deg)"
      default: return ""
    }
  }

    return(
        <div className="App">
            <h1>Click to roll the dice</h1>
             <div className="container" onClick={rollDice}>
        <div id="cube" style={{ transform: getRotation(diceValue) }}>
          <div className="front"><span className="dot dot1" /></div>
          <div className="back">
            <span className="dot dot1" />
            <span className="dot dot2" />
          </div>
          <div className="right">
            <span className="dot dot1" />
            <span className="dot dot2" />
            <span className="dot dot3" />
          </div>
          <div className="left">
            <span className="dot dot1" />
            <span className="dot dot2" />
            <span className="dot dot3" />
            <span className="dot dot4" />
          </div>
          <div className="top">
            <span className="dot dot1" />
            <span className="dot dot2" />
            <span className="dot dot3" />
            <span className="dot dot4" />
            <span className="dot dot5" />
          </div>
          <div className="bottom">
            <span className="dot dot1" />
            <span className="dot dot2" />
            <span className="dot dot3" />
            <span className="dot dot4" />
            <span className="dot dot5" />
            <span className="dot dot6" />
          </div>
        </div>
      </div>
            <button onClick={rollDice} disabled={rolling}>
                {rolling ? "Rolling..." : "Roll Dice"}
            </button>
        </div>
    )
}

export default App