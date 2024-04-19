import React, { useState } from "react";
import "./style.css";

const TextAnalyzer = () => {
  //state variables
  const [text, setText] = useState("");
  const [words, setWords] = useState(0);
  const [characters, setCharacters] = useState(0);
  const [sentences, setSentences] = useState(0);
  const [paragraphs, setParagraphs] = useState(0);
  const [readingTime, setReadingTime] = useState(0);
  const [longestWord, setLongestWord] = useState("");
  const [pronouns, setPronouns] = useState(0);

  //Function to handle text input
  const handleTextChange = (event) => {
    const newText = event.target.value;
    setText(newText);
    analyzeText(newText);
  };

  //Function to analyze text
  const analyzeText = (text) => {
    // Calculate words count
    const wordsCount = text.trim().split(/\s+/).filter(Boolean).length;
    setWords(wordsCount);

    //Calculate charcters count
    const charactersCount = text.length;
    setCharacters(charactersCount);

    // Calculate sentence count
    const sentencesCount = text.split(/[.!?]+/).filter(Boolean).length;
    setSentences(sentencesCount);

    // Calculate paragraphs count
    const paragraphsCount = text.split("\n").filter(Boolean).length;
    setParagraphs(paragraphsCount);

    // Calculate average reading time
    const avgReadingTime = Math.ceil(wordsCount / 200); // Assuming 200 words per minute
    setReadingTime(avgReadingTime);

    // Calculate longest word
    const wordsArray = text.trim().split(/\s+/).filter(Boolean);
    const longest = wordsArray.reduce(
      (a, b) => (a.length > b.length ? a : b),
      ""
    );
    setLongestWord(longest);

    // Calulate number of pronouns (assuming a list of pronouns)
    const pronounsList = [
      "I",
      "you",
      "he",
      "she",
      "it",
      "we",
      "they",
      "me",
      "him",
      "her",
      "us",
      "them",
    ];
    const pronounsCount = wordsArray.filter((word) =>
      pronounsList.includes(word.toLowerCase())
    ).length;
    setPronouns(pronounsCount);
  };

  return (
    <div>
      <textarea
        className="text-area"
        placeholder="Type or paste your text here..."
        value={text}
        onChange={handleTextChange}
      />
      <div className="result-container">
        <div className="result-item">
          <span>Words:</span> {words}
        </div>
        <div className="result-item">
          <span>Characters:</span> {characters}
        </div>
        <div className="result-item">
          <span>Sentences:</span> {sentences}
        </div>
        <div className="result-item">
          <span>Paragraphs:</span> {paragraphs}
        </div>
        <div className="result-item">
          <span>Average Reading Time:</span> {readingTime} minutes
        </div>
        <div className="result-item">
          <span>Longest Word:</span> {longestWord}
        </div>
        <div className="result-item">
          <span>Pronouns:</span> {pronouns}
        </div>
      </div>
    </div>
  );
};
export default TextAnalyzer;
