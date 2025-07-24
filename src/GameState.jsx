import React, { useState } from "react";

const PLAYERS = ["red", "green", "yellow", "blue"];
const BOARD_SIZE = 52; 

const initialTokens = () =>
  Array(4)
    .fill(0)
    .map(() => ({ position: null }));

export function useLudoGame() {
  const [tokens, setTokens] = useState({
    red: initialTokens(),
    green: initialTokens(),
    yellow: initialTokens(),
    blue: initialTokens(),
  });
  const [currentPlayer, setCurrentPlayer] = useState("red");
  const [dice, setDice] = useState(null);

  function rollDice() {
    setDice(Math.ceil(Math.random() * 6));
  }

  function moveToken(tokenIdx) {
    const SAFE_ZONES = [0, 8, 13, 21, 26, 34, 39, 47];

function moveToken(tokenIdx) {
  if (dice == null) return;

  setTokens((prev) => {
    const playerTokens = [...prev[currentPlayer]];
    const token = playerTokens[tokenIdx];

    
    if (token.position === null) {
      if (dice === 6) {
        token.position = 0;
      } else {
        return prev;
      }
    } else {
      token.position += dice;
      if (token.position > BOARD_SIZE) {
        token.position = BOARD_SIZE; 
      }
    }

    const updatedTokens = { ...prev, [currentPlayer]: playerTokens };

    
    for (const player of PLAYERS) {
      if (player === currentPlayer) continue;

      const enemyTokens = [...updatedTokens[player]];

      for (let i = 0; i < enemyTokens.length; i++) {
        const enemyToken = enemyTokens[i];

        const sameSpot = enemyToken.position === token.position;
        const notSafe = !SAFE_ZONES.includes(token.position);

        if (
          sameSpot &&
          notSafe &&
          token.position !== null &&
          enemyToken.position !== null
        ) {
          enemyToken.position = null; 
        }
      }

      updatedTokens[player] = enemyTokens;
    }

    return updatedTokens;
  });

  
  if (dice !== 6) {
    setCurrentPlayer(
      PLAYERS[(PLAYERS.indexOf(currentPlayer) + 1) % PLAYERS.length]
    );
  }

  setDice(null);
}

  }

  return {
    tokens,
    currentPlayer,
    dice,
    rollDice,
    moveToken,
  };
}
    moveToken