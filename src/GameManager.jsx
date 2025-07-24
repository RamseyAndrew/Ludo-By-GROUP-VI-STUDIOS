// src/GameManager.jsx
import React, { useState } from "react";
import Board from "./Board";
import TurnManager from "./TurnManager";
import useCaptureLogic from "./TokenCapture";
 import Dice from "./DIce";

const players = ["Red", "Blue", "Green", "Yellow"];

const GameManager = () => {
  const [diceValue, setDiceValue] = useState(1);
  const [rolling, setRolling] = useState(false);
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  const { moveToken, positions } = useCaptureLogic();

  const currentPlayer = players[currentPlayerIndex];

  const rollDice = () => {
    if (rolling) return;
    setRolling(true);

    const newValue = Math.floor(Math.random() * 6) + 1;
    setTimeout(() => {
      setDiceValue(newValue);
      moveToken(currentPlayer, newValue);
      setRolling(false);
      setCurrentPlayerIndex((prev) => (prev + 1) % players.length);
    }, 800); // Match with cube animation time
  };

  return (
    <div className="game-container">
      <TurnManager currentPlayerIndex={currentPlayerIndex} />
      
      {/* Dice Component */}
      <div className="dice-container">
        <div className={`dice dice-${diceValue} ${rolling ? 'rolling' : ''}`} onClick={rollDice}>
          <div className="face one"><span></span></div>
          <div className="face two"><span></span><span></span></div>
          <div className="face three"><span></span><span></span><span></span></div>
          <div className="face four"><span></span><span></span><span></span><span></span></div>
          <div className="face five"><span></span><span></span><span></span><span></span><span></span></div>
          <div className="face six"><span></span><span></span><span></span><span></span><span></span><span></span></div>
        </div>
        <p className="dice-info">Current Player: {currentPlayer}</p>
        <p className="dice-info">Rolled: {diceValue}</p>
      </div>

      <Board positions={positions} />
    </div>
  );
};

export default GameManager;
