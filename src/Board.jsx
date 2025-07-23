import React from 'react';
import boardImg from './assets/Board.png';

const Board = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh' }}>
    <img 
      src={boardImg} 
      alt="Ludo Board" 
      style={{ maxWidth: '90vw', maxHeight: '80vh', width: 'auto', height: 'auto', boxShadow: '0 4px 24px rgba(0,0,0,0.2)', borderRadius: '12px' }}
    />
  </div>
);

export default Board;
 