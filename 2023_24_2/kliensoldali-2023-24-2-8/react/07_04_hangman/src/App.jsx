import { useState } from "react";
import Buttons from "./Buttons";
import Hangman from "./Hangman";
import Result from "./Result";
import Word from "./Word";
import { wordList } from "https://cdn.jsdelivr.net/gh/vimtaai/elte-efop-feladattar@926d45a525eecee2f8ca159faa585192263ab196/tasks/hangman/solutions/04/words.js";

const random = (a, b) => Math.floor(Math.random() * (b - a + 1)) + a;

const App = () => {
  // Application state (data)
  const [maxTips, setMaxTips] = useState(9);
  const [word, setWord] = useState("alma");
  const [tips, setTips] = useState([]);

  // Event handlers
  const tip = (letter) => {
    console.log(letter);
    // tips.push(letter);

    setTips([...tips, letter]);
  };

  const newGame = () => {
    const newWord = wordList[random(0, wordList.length)];

    setMaxTips(9 + Math.floor(newWord.length / 2));
    setWord(newWord);
    setTips([]);
  };

  // Computed values
  // const [wrong, setWrong] = 3; // word, tips
  // const [won, setWon] = false; // word, tips
  // const [isOver, setIsOver] = false; // maxTips, tips
  const wrong = tips.filter((letter) => !word.includes(letter)).length;
  const won = word.split("").every((letter) => tips.includes(letter));
  const isOver = won || wrong >= maxTips;

  return (
    <>
      <h1>Hangman</h1>

      <Word word={word} tips={tips} won={won} isOver={isOver} />

      {isOver ? <button onClick={newGame}>New game</button> : <Buttons tips={tips} handleTip={tip} />}

      <Result maxTips={maxTips} wrong={wrong} />

      <Hangman wrong={wrong} />
    </>
  );
};

export default App;
