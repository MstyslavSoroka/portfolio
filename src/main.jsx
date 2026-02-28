import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import SvgSprite from './SvgSprite';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SvgSprite />
    <App />
  </StrictMode>,
);
