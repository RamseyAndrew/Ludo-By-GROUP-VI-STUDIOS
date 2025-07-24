// src/Board.jsx
import React from 'react';
import './Board.css';
import Token from './Token';

const Board = () => {
  const cells = [];

  for (let row = 0; row < 15; row++) {
    for (let col = 0; col < 15; col++) {
      const key = `${row}-${col}`;
      cells.push(<div key={key} className={`cell r${row} c${col}`} />);
    }
  }

  return (
    <div className="board-wrapper">
      <div className="board">
        {cells}
      </div>

     {/* {these are the blue tokens} */}
      <Token row={1.5} col={1.5} color="#4285f4" />
      <Token row={1.5} col={3.5} color="#4285f4" />
      <Token row={3.5} col={1.5} color="#4285f4" />
      <Token row={3.5} col={3.5} color="#4285f4" />
      
      {/* {these are the yellow tokens} */}
      <Token row={10.5} col={1.5} color="gold" />  
      <Token row={10.5} col={3.5} color="gold" />  
      <Token row={12.5} col={1.5} color="gold" />  
      <Token row={12.5} col={3.5} color="gold" />  

      {/* {these are the red tokens} */}
      <Token row={1.5} col={10.5} color="#ea4335" /> 
      <Token row={1.5} col={12.5} color="#ea4335" /> 
      <Token row={3.5} col={10.5} color="#ea4335" /> 
      <Token row={3.5} col={12.5} color="#ea4335" /> 

      {/* {these are the green tokens} */}
      <Token row={10.5} col={10.5} color="#34a853" />
      <Token row={10.5} col={12.5} color="#34a853" />
      <Token row={12.5} col={12.5} color="#34a853" />
      <Token row={12.5} col={10.5} color="#34a853" />
    </div>
  );
};

export default Board;
