import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={()=>setGood(good+1)}>good</button>
      <button onClick={()=>setNeutral(neutral+1)}>netural</button>
      <button onClick={()=>setBad(bad+1)}>bad</button>
      <h2>statistics</h2>
      <span>good </span>{good}<br></br>
      <span>neutral </span>{neutral}<br></br>
      <span>bad </span>{bad}<br></br>
    </div>
  )
}

export default App