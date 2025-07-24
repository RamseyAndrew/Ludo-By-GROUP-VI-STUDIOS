import React from "react";
import "./TurnManager.css"

const players = ["Red", "Blue", "Green", "Yellow"];
const playerColors = {
    Red: "red",
    Blue: "blue",
    Green: "green",
    Yellow: "yellow",
}

function TurnManager({currentPlayerIndex, onNextTurn}) {
    const currentPlayer = players[currentPlayerIndex];

    return(
        <div className="turn-manager">
            <h1 style={{color: playerColors[currentPlayer]}}>
                {currentPlayer}'s Turn
            </h1>

            <button onClick={onNextTurn} className="next-btn">
                Next Turn
            </button>
        </div>
    );
}

export default TurnManager;