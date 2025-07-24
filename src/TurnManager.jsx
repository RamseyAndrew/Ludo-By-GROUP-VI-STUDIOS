import React from "react";
import "./TurnManager.css"

const players = ["Red", "Blue", "Green", "Yellow"];
const playerColors = {
    Red: "red",
    Blue: "blue",
    Green: "green",
    Yellow: "yellow",
}

function TurnManager({ currentPlayerIndex }) {
    const currentPlayer = players[currentPlayerIndex];

    return (
        <div className="turn-manager">
            <h1 style={{ color: playerColors[currentPlayer] }}>
                {currentPlayer}'s Turn
            </h1>
        </div>
    );
}

export default TurnManager;