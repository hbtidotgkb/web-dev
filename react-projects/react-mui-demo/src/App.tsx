import React from 'react';
import logo from './logo.svg';
import './App.css';
import { MuiTypography } from './components/MuiTypography';
import { MuiButton } from './components/MuiButton';
import MiniDrawer from './components/MiniDrawer';

function App() {
  return (
    <div className="App">
      <MiniDrawer/>
    </div>
  );
}

export default App;
