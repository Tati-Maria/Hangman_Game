import './App.css';
import { useCallback, useEffect, useState } from 'react';
import words from "./wordList.json"
import Hangman from './components/Hangman';
import HangmanWord from './components/HangmanWord';
import Keybord from './components/Keybord';
import Results from './components/Results';

//get random word
const getWord = () => {
  return words[Math.floor(Math.random() * words.length)]
}

const App = () => {
  const [word, setWord] = useState(getWord);
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]); //an array of string(letters)

  const incorrectLetters = guessedLetters.filter(
    letter =>  !word.includes(letter) //loops to find if the inserted letter matches the word to guess
  );

  //you lose
  const isLoser:boolean = incorrectLetters.length >= 6;
  //you win
  const isWinner:boolean = word.split("").every(letter =>guessedLetters.includes(letter)) //if every word added matches the word to guess

  const addGuessedLetter = useCallback((letter: string) => {
    if(guessedLetters.includes(letter) || isLoser || isWinner) return;

    setGuessedLetters(currentLetters => [...currentLetters, letter])

  }, [guessedLetters, isLoser, isWinner]);

  //using the keybord
  useEffect(() => {
    const handler: any = (e: KeyboardEvent) => {
      const key = e.key;
      if(!key.match(/^[a-z]$/)) return;
      e.preventDefault();
      addGuessedLetter(key);
    }

    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    }
  
  }, [guessedLetters]);

  //To be to restart the game by pressing enter on the keybord
  useEffect(() => {
    const handler: any = (e: KeyboardEvent) => {
      const key = e.key;
      if(key!== "Enter") return;
      e.preventDefault();
      setGuessedLetters([]);
      setWord(getWord());
    }

    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    }

  })


  return (
    <section className='container'>
    <Results isLoser={isLoser} isWinner={isWinner} />
    <Hangman numberOfAttempts={incorrectLetters.length} />
    <HangmanWord reveal={isLoser} guessedLetters={guessedLetters} word={word}  />
    <div className='key-board'>
    <Keybord disabled={isWinner || isLoser} activeLetters={guessedLetters.filter(letter => word.includes(letter))} inactiveLetters={incorrectLetters} addGuessedLetter={addGuessedLetter} />
    </div>
    </section>
  )
}

export default App;
