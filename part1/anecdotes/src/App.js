import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(8).fill(0))
  const [maxVotesIndex, setMaxVotesIndex] = useState(0)
  

  const randomNumber = () => setSelected(Math.floor(Math.random()*8))
  const incrementVote = () => {
    const newVotes = [...votes]
    newVotes[selected]++
    setVotes(newVotes)

    setMaxVotesIndex(newVotes.indexOf(Math.max(...newVotes)))
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}<br></br>
      <p>has {votes[selected]} votes</p>
      <Button name="vote" handleClick={incrementVote}></Button>
      <Button name="next anecdote" handleClick={randomNumber}></Button>
      <br></br>
      <h2>Anecdote with most votes</h2>
      {anecdotes[maxVotesIndex]}
      <p>has {votes[maxVotesIndex]} votes</p>
    </div>
  )
}

const Button = props => {
  return(
      <button onClick={props.handleClick}>{props.name}</button>
  )
}

export default App