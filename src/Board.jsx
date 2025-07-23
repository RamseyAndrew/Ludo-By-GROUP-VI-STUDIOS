// src/Board.jsx
import React from 'react';
import boardImg from './assets/board.png';
import Token from './Token';

const tokens = [
  // Blue (top-left)
  { x: 152, y: 160, color: 'blue' }, 
  { x: 235, y: 160, color: 'blue' }, 
  { x: 152, y: 239, color: 'blue' }, 
  { x: 235, y: 240, color: 'blue' },  

  // Red (top-right)
  { x: 523, y: 158, color: 'red' }, 
  { x: 603.5, y: 160, color: 'red' }, 
  { x: 523, y: 239.6, color: 'red' }, 
  { x: 603.5, y: 240, color: 'red' }, 

  // Yellow (bottom-left)
  { x: 153, y: 524, color: 'gold' }, 
  { x: 237, y: 525.1, color: 'gold'}, 
  { x: 154, y: 606.6, color: 'gold' }, 
  { x: 237.4, y: 604, color: 'gold' }, 

  // Green (bottom-right)
  { x: 521.5, y: 525, color: 'green' }, 
  { x: 606.5, y: 525, color: 'green' }, // done
  { x: 521.5, y: 605, color: 'green' }, 
  { x: 606.5, y: 604, color: 'green' }, // done
];

const Board = () => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
    }}
  >
    <div style={{ position: 'relative', width: 800, height: 800 }}>
      <img
        src={boardImg}
        alt="Ludo Board"
        style={{
          width: '100%',
          height: '100%',
          borderRadius: '12px',
          boxShadow: '0 4px 24px rgba(0,0,0,0.2)',
        }}
      />
      {tokens.map((token, index) => (
        <Token key={index} {...token} />
      ))}
    </div>
  </div>
);

export default Board;
