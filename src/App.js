import React from 'react';
import logo from './logo.svg';
import './App.css';

import Circles from './components/circles'
function App() {
  return (
    <div className="app">
      <div className="container">
        <Circles />
        <img src={logo} className="app-logo" alt="logo" />
      </div>
    </div>
  );
}

export default App;
