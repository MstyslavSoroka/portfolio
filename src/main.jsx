import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import SvgSprite from './SvgSprite';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/portfolio">
    <>
      <SvgSprite />
      <App />
    </>
  </BrowserRouter>,
);
