 import styles from "./keybord.module.css";

const KEYS: string[] = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
]

type keybordProps = {
  activeLetters: string[],
  disabled?: boolean,
  inactiveLetters: string[],
  addGuessedLetter: (letter: string) => void
}

const Keybord = ({activeLetters, disabled =  false, inactiveLetters, addGuessedLetter}: keybordProps) => {
  return (
    <section className={styles.key} >
      {KEYS.map(key => {
        const isActive = activeLetters.includes(key);
        const isNactive = inactiveLetters.includes(key)
        return <button key={key} onClick={() =>addGuessedLetter(key)} 
        className={`${styles.btn} ${isActive ? styles.active : ""} ${isNactive ? styles.inactive : ""}`} disabled={isNactive || isActive || disabled}
        >
          {key}
        </button>
      })}
    </section>
  )
}

export default Keybord;