import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  const incrementGood = () => {
    setGood(good+1)
    setTotal(total+1)
    console.log(good,bad,neutral,total)
    setAverage((good+1-bad)/(total+1))
    setPositive((good+1)/(total+1))
  }
  const incrementNeutral = () => {
    setNeutral(neutral+1)
    setTotal(total+1)
    setAverage((good-bad)/(total+1))
    setPositive((good)/(total+1))
  }
  const incrementBad = () => {
    setBad(bad+1)
    setTotal(total+1)
    setAverage((good-bad-1)/(total+1))
    setPositive((good)/(total+1))
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button name="good" handleClick={incrementGood}></Button>
      <Button name="neutral" handleClick={incrementNeutral}></Button>
      <Button name="bad" handleClick={incrementBad}></Button>
      <h2>statistics</h2>
      <Statistics countGood={good} countBad={bad} countNeutral={neutral} average={average} positive={positive} total={total}></Statistics>
    </div>
  )
}

const Button = props => {
  return(
      <button onClick={props.handleClick}>{props.name}</button>
  )
}

const StatisticLine = props => {
  return (
    <p>{props.name} {props.value}</p>
  )
}

const Statistics = props => {
  if (props.total){
    return (
      <div>
        <StatisticLine name='good' value={props.countGood}></StatisticLine>
        <StatisticLine name='neutral' value={props.countNeutral}></StatisticLine>
        <StatisticLine name='bad' value={props.countBad}></StatisticLine>
        <StatisticLine name='total' value={props.total}></StatisticLine>
        <StatisticLine name='average' value={props.average}></StatisticLine>
        <StatisticLine name='positive' value={props.positive}></StatisticLine>
      </div>
     )
  } else {
    return (
      <p>No feedback given</p>
    )
  }

}

export default App