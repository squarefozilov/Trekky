import React from 'react';
import logo from './logo.svg';
import './App.css';
import Maps from './components/Maps';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Let's build the coolest app! We can do it.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Maps/>
    </div>
  );
}

export default App;
