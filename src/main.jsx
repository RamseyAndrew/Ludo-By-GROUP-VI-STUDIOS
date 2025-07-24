// src/main.jsx
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './Board.css';
import Token from './Token';
import Board from './Board';
import App from './App';
import useCaptureLogic from './TokenCapture';

ReactDOM.createRoot(document.getElementById('root')).render(
<StrictMode>
  <Board/>
  <App/>
  <useCaptureLogic/>
  <Token/>
  </StrictMode>
);
