// src/ParagraphGenerator.js
import React from 'react';

const generateParagraph = (wordCount) => {
  const words = [
    "apple", "car", "house", "city", "computer", "teacher", "dog", "book", "river", "mountain",
    "school", "garden", "movie", "country", "ocean", "phone", "bottle", "tree", "table", "chair"
 ,
    "I", "you", "he", "she", "it", "we", "they", "me", "him", "her"
  ,
    "run", "jump", "eat", "sleep", "drive", "read", "write", "swim", "talk", "walk",
    "listen", "cook", "sing", "dance", "play", "watch", "build", "teach", "learn", "grow",
    "quickly", "slowly", "happily", "sadly", "loudly", "quietly", "carefully", "easily", "always", "never"
 ,
    "beautiful", "happy", "sad", "big", "small", "tall", "short", "smart", "brave", "kind",
    "strong", "weak", "old", "young", "new", "good", "bad", "fast", "slow", "bright",
    "concept", "theory", "analysis", "discovery", "technology", "innovation", "creativity", "communication", "development", "education",
    "knowledge", "strategy", "opportunity", "challenge", "solution", "experience", "perspective", "relationship", "influence", "inspiration"
  ];

  
  let paragraph = '';
  for (let i = 0; i < wordCount; i++) {
    paragraph += words[Math.floor(Math.random() * words.length)] + ' ';
  }
  return paragraph.trim();
};

const ParagraphGenerator = ({ wordCount }) => {
  const paragraph = generateParagraph(wordCount);

  return (
    <div>
      <p>{paragraph}</p>
    </div>
  );
};

export default ParagraphGenerator;
