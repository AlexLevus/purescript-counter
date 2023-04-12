import React from 'react';
import './App.css';
import { jsCounter as Counter } from './Components/Counter/Interop';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
      </header>
    </div>
  );
}

export default App;
