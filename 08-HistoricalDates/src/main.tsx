import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/index.css';
import SliderLogicProvider from './contexts/SliderLogicProvider';
import ScreenSizeProvider from './contexts/ScreenSizeProvider';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ScreenSizeProvider>
      <SliderLogicProvider>
        <App />
      </SliderLogicProvider>
    </ScreenSizeProvider>
  </React.StrictMode>,
);
