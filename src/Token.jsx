// src/Token.jsx
import React from 'react';

const Token = ({ x, y, color }) => {
  const size = 34; // size in pixels

  return (
    <div
      style={{
        position: 'absolute',
        top: y,
        left: x,
        width: size,
        height: size,
        borderRadius: '50%',
        backgroundColor: color,
        border: '2px solid white',
        boxShadow: '0 2px 6px rgba(0,0,0,0.3)',
      }}
    />
  );
};

export default Token;
