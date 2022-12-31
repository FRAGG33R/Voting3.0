import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
   <style> @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,600;1,300;1,600&display=swap'); </style>
    <App />
  </React.StrictMode>
);
