import "./results.css";

type ResultProps = {
  isWinner: boolean,
  isLoser: boolean
}


const Results = ({isWinner, isLoser}: ResultProps) => {
  const handleRefresh = () => {
    return window.location.reload()
  }

  return (
    <>
       {isWinner && <><p>Winner!! - Refresh or press enter to play again!</p><button className='refresh-btn' onClick={() => handleRefresh()}>Refresh</button></>} 
       {isLoser && <> <p>Nice Try! - Refresh or press enter to try again!</p><button className="refresh-btn" onClick={() => handleRefresh()}>Refresh</button></>}
    </>
  )
}

export default Results;