import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import NavigationProvider from './contexts/NavigationProvider';
import './styles/index.css';
import GameLogicProvider from './contexts/GameLogicProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <NavigationProvider>
      <GameLogicProvider>
        <App />
      </GameLogicProvider>
    </NavigationProvider>
  </React.StrictMode>,
);
