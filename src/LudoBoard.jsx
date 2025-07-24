import React from "react";
import { useLudoGame } from "./GameState";

export default function LudoBoard() {
  const { tokens, currentPlayer, dice, rollDice, moveToken } = useLudoGame();

  return (
    <div className="ludo-container">
      <div className="board">
        {/* ...existing code for drawing board squares... */}
        {Object.entries(tokens).map(([player, playerTokens]) =>
          playerTokens.map((token, idx) => (
            <div
              key={player + idx}
              className={`token ${player}`}
              style={{
                
                left: `${10 + ((token.position ?? -2) * 2)}%`,
                top: `${10 + ((token.position ?? -2) * 2)}%`,
              }}
              onClick={() =>
                currentPlayer === player && dice && moveToken(idx)
              }
            >
              {idx + 1}
            </div>
          ))
        )}
      </div>
      <div className="controls">
        <button onClick={rollDice} disabled={dice !== null}>
          Roll Dice
        </button>
        {dice && <span>Dice: {dice}</span>}
        <span>Current Player: {currentPlayer}</span>
      </div>
    </div>
  );
}