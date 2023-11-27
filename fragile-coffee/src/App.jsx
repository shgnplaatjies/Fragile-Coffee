import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Journeys from './services/routers/Journeys';
import AppContextStateProvider from './services/state/state_providers/AppContextStateProvider.jsx';

function App() {
  return (
    <BrowserRouter>
      <AppContextStateProvider components={
        <Journeys />
      }>
      </AppContextStateProvider>
    </BrowserRouter>
  );
}

export default App;
