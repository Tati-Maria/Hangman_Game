import "./hangmanword.css"

type HangmanWordProps = {
  guessedLetters: string[],
  word: string,
  reveal?: boolean
}

const HangmanWord = ({guessedLetters, word, reveal}: HangmanWordProps) => {
  return (
    <section className="word-container">
      {word.split("").map((letter, index) => 
      (<span key={index} className="word">
        <span style={{visibility: guessedLetters.includes(letter)
          || reveal ? "visible": "hidden", color: 
           !guessedLetters.includes(letter) && reveal ? 
           "red" : "#646cff"}}>{letter}</span>
      </span>))}
    </section>
  )
}

export default HangmanWord;