import React from 'react';
import './App.css';
import RomanNumeralsConverter from './components/RomanNumeralsConverter';

function App() {
  return (
    <div className="app">
      <div className="app__converter">
        <RomanNumeralsConverter />
      </div>
    </div>
  );
}

export default App;
