import React, { FunctionComponent, useState } from 'react';
import { RomanNumerals } from '../logic/roman-numerals';
import './RomanNumeralsConverter.css';

export const RomanNumeralsConverter: FunctionComponent = () => {
  const [numbersText, setNumbersText] = useState<string>('');
  const [romansText, setRomansText] = useState<string>('');

  const handleNumbersTextChange = (e: any) => {
    const numbersText: string = e.target.value;
    const romansText = numbersText.split('\n')
      .map(str => {
        if (!str) {
          return str;
        }

        const num = Number(str);
        return RomanNumerals.toRoman(num);
      })
      .join('\n');

    setNumbersText(numbersText);
    setRomansText(romansText);
  };

  const handleRomansTextChange = (e: any) => {
    const romansText: string = e.target.value;
    const numbersText = romansText.split('\n')
      .map(str => {
        if (!str) {
          return str;
        }

        const num = RomanNumerals.fromRoman(str);
        return String(num);
      })
      .join('\n');

    setNumbersText(numbersText);
    setRomansText(romansText);
  };

  return (
    <div className="roman-converter">
      <h2 className="roman-converter__header--left">
        Numbers
      </h2>
      <h2 className="roman-converter__header--right">
        Roman Numerals
      </h2>
      <div className="roman-converter__separator">{'< >'}</div>
      <textarea
        className="roman-converter__input--left"
        name="numbers"
        id="numbers"
        rows={20}
        value={numbersText}
        onChange={handleNumbersTextChange}
      >
      </textarea>
      <textarea
        className="roman-converter__input--right"
        name="romans"
        id="romans"
        rows={20}
        value={romansText}
        onChange={handleRomansTextChange}
      >
      </textarea>
    </div>
  );
};

export default RomanNumeralsConverter;
