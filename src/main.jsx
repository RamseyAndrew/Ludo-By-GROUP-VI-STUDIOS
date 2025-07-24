// src/main.jsx
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './Board.css';
import './Token.css';
import './Dice.css'

ReactDOM.createRoot(document.getElementById('root')).render(
<StrictMode>
  <App/>
  </StrictMode>
);
