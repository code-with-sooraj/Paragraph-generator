// src/App.js
import React, { useState } from 'react';
import './App.css';
import WordInput from './components/WordInput';
import ParagraphGenerator from './components/ParagraphGenerator';

function App() {
  const [wordCount, setWordCount] = useState(10);

  const handleWordCountChange = (event) => {
    setWordCount(event.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Paragraph Generator</h1>
        <WordInput onChange={handleWordCountChange} value={wordCount} />
        <ParagraphGenerator wordCount={wordCount} />
      </header>
    </div>
  );
}

export default App;
