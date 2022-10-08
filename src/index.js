import React from 'react';
import ReactDOM from 'react-dom/client';
import { Router } from 'react-router-dom';
import Rotas from './routes';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Rotas />
  </React.StrictMode>
);


