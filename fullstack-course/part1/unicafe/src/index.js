import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics = ({totalCount, good, bad, neutral}) => {
  if(totalCount > 0){
    return (
      <>
        <h1>Statistics</h1>
        <table>
          <tbody>
            <Statistic text="Good" value={good}></Statistic>
            <Statistic text="Neutral" value={neutral}></Statistic>
            <Statistic text="Bad" value={bad}></Statistic>
            <Statistic text="All" value={totalCount}></Statistic>
            <Statistic text="Average" value={(good + (bad*-1))/(totalCount)}></Statistic>
            <Statistic text="Positive" value={(good/totalCount) * 100}></Statistic>
          </tbody>
        </table>
      </>
    )
  }
  else{
    return (
      <>
        <h1>Statistics</h1>
        <p>No feedback given </p>
      </>
    )
  }
};

const Statistic = ({text, value}) => {
  return( 
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )

}

const Button = ({text, handleClick}) =>{
  return <button onClick={handleClick}>{text}</button>
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () =>{
    setGood(good + 1);
  }

  const handleNeutralClick = () =>{
    setNeutral(neutral + 1);
  }

  const handleBadClick = () =>{
    setBad(bad + 1);
  }

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button text="Good" handleClick={handleGoodClick}></Button>
      <Button text="Neutral" handleClick={handleNeutralClick}></Button>
      <Button text="Bad" handleClick={handleBadClick}></Button>
      <Statistics totalCount={good + bad + neutral} good={good} bad={bad} neutral={neutral}></Statistics>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)