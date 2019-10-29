import React from 'react';
import logo from './logo.svg';
import { HelloWorld } from '@itekako/module-1';
import { Button } from '@itekako/shared';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <HelloWorld />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button>shared component</Button>
      </header>
    </div>
  );
}

export default App;
