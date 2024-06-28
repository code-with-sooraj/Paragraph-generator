// src/WordInput.js
import React from 'react';

const WordInput = ({ onChange, value }) => {
  return (
    <div>
      <label htmlFor="wordCount">Number of words:</label>
      <input
        type="number"
        id="wordCount"
        value={value}
        onChange={onChange}
        min="1"
      />
    </div>
  );
};

export default WordInput;
