import "./hangman.css";

const HEAD = (
    <div className='head'></div>
)

const BODY = (
    <div className='body'></div>
);

const RIGHTARM = (
    <div className='rightarm'></div>
);

const LEFTARM = (
    <div className='leftarm'></div>
);

const RIGHTLEG = (
    <div className='rightleg'></div>
)

const LEFTLEG = (
    <div className='leftleg'></div>
)

type HangmanProps = {
    numberOfAttempts: number;
}

//Hangman body parts
const BODY_PARTS = [HEAD, BODY, RIGHTARM, LEFTARM, RIGHTLEG, LEFTLEG]

const Hangman = ({numberOfAttempts}: HangmanProps) => {
  return (
    <section className='hangman-container'>
        {BODY_PARTS.slice(0, numberOfAttempts)}
        <div className='part-1' />
        <div className='part-2' />
        <div className='part-3' />
        <div className='part-4' />
    </section>
  )
}

export default Hangman;