
import React from 'react';
import logo from './logo.svg';
import './App.css';

function Header() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <span>Learn React </span>  
      </header>
    </div>
  );
}

export default Header;