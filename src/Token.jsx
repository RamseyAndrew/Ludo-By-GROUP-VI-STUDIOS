// src/Token.jsx
import React from 'react';

const Token = ({ row, col, color }) => {
  const cellSize = 800 / 15; // 53.33px

  const style = {
    position: 'absolute',
    top: row * cellSize,
    left: col * cellSize,
    width: cellSize,
    height: cellSize,
    borderRadius: '50%',
    backgroundColor: color,
    border: '2px solid white',
    boxShadow: '0 2px 6px rgba(0,0,0,0.3)',
    zIndex: 10,
  };

  return <div style={style}></div>;
};

export default Token;
