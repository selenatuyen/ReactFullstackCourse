import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics = ({totalCount, good, bad, neutral}) => {
  if(totalCount > 0){
    return (
      <div>
        <h1>Statistics</h1>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>All: {good + neutral + bad}</p>
        <p>Average: {(good + (bad*-1))/(totalCount)}</p>
        <p>Positive: {(good/totalCount) * 100}%</p>
      </div>
    )
  }
  else{
    return <div></div>
  }
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give Feedback</h1>
      <button onClick={() => setGood(good+1)}>Good</button>
      <button onClick={() => setNeutral(neutral+1)}>Neutral</button>
      <button onClick={() => setBad(bad+1)}>Bad</button>
      <Statistics totalCount={good + bad + neutral} good={good} bad={bad} neutral={neutral}></Statistics>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)