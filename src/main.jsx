// src/main.jsx
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './Board.css';
import Token from './Token';
import Board from './Board';

ReactDOM.createRoot(document.getElementById('root')).render(
<StrictMode>
  <Board/>
  </StrictMode>
);
