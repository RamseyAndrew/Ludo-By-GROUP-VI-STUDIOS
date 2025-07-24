// src/components/Dice.jsx
import React, { useState } from 'react';
import '/Dice.css';

const Dice = ({ onRoll, disabled }) => {
  const [diceValue, setDiceValue] = useState(1);

  const handleRoll = () => {
    const result = Math.floor(Math.random() * 6) + 1;
    setDiceValue(result);
    onRoll(result);
  };

  const getDiceRotation = (value) => {
    switch (value) {
      case 1: return 'rotateX(0deg) rotateY(0deg)';
      case 2: return 'rotateX(-90deg) rotateY(0deg)';
      case 3: return 'rotateX(0deg) rotateY(90deg)';
      case 4: return 'rotateX(0deg) rotateY(-90deg)';
      case 5: return 'rotateX(90deg) rotateY(0deg)';
      case 6: return 'rotateX(180deg) rotateY(0deg)';
      default: return '';
    }
  };

  return (
    <div className="App">
      <h1>Roll the Dice</h1>
      <div className="container" onClick={handleRoll}>
        <div id="cube" style={{ transform: getDiceRotation(diceValue) }}>
          <div className="front"><span className="dot dot1"></span></div>
          <div className="back">
            <span className="dot dot1"></span>
            <span className="dot dot2"></span>
          </div>
          <div className="right">
            <span className="dot dot1"></span>
            <span className="dot dot2"></span>
            <span className="dot dot3"></span>
          </div>
          <div className="left">
            <span className="dot dot1"></span>
            <span className="dot dot2"></span>
            <span className="dot dot3"></span>
            <span className="dot dot4"></span>
          </div>
          <div className="top">
            <span className="dot dot1"></span>
            <span className="dot dot2"></span>
            <span className="dot dot3"></span>
            <span className="dot dot4"></span>
            <span className="dot dot5"></span>
          </div>
          <div className="bottom">
            <span className="dot dot1"></span>
            <span className="dot dot2"></span>
            <span className="dot dot3"></span>
            <span className="dot dot4"></span>
            <span className="dot dot5"></span>
            <span className="dot dot6"></span>
          </div>
        </div>
      </div>

      <button onClick={handleRoll} disabled={disabled}>
        Roll
      </button>
    </div>
  );
};

export default Dice;
