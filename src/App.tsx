import React from 'react';
import './App.css';
import RomanNumeralsConverter from './components/RomanNumeralsConverter';

function App() {
  return (
    <div className="app">
      <header className="app__header">
        <h1>Roman Numerals Converter</h1>
      </header>
      <div className="app__description">
        <p>
          Type a normal integer number on the left text area and see its representation as a Roman numeral on the right.
          <br />
          You can input multiple numbers using multiple lines.
          <br />
          Or type roman numerals on the right side and see the opposite conversion working as well.
        </p>
      </div>
      <div className="app__converter">
        <RomanNumeralsConverter />
      </div>
    </div>
  );
}

export default App;
