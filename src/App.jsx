import { useState } from "react"

function App(){
    const [diceValue, setDiceValue] = useState(1)
    const [rolling, setRolling] = useState(false)

    const rollDice = () => {
        if (rolling) return;
        setRolling(true)

        const newValue = Math.floor(Math.random()*6 + 1)
        setTimeout(() => {
            setDiceValue(newValue)
            setRolling(false)
        }, 1000)
    }

    return(
        <div className="App">
            <div className={`dice${rolling ? "rolling":""}`}>{diceValue}</div>
            <button onClick={rollDice} disabled={rolling}>
                {rolling ? "Rolling..." : "Roll Dice"}
            </button>
        </div>
    )
}

export default App