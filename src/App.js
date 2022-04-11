import React from 'react';
import logo from './logo.svg';
import './App.css';

import Circles from './components/circles'
import Nav from './components/nav'
import Minor from './components/minor'
import Major from './components/major'

function App() {
  return (
    <div className="app">
        <Circles />
        <img src={logo} className="app-logo" alt="logo" />
        <Major />
        <Minor />
        <Nav />
    </div>
  );
}

export default App;
