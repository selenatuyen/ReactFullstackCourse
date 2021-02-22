import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(Array(anecdotes.length).fill(0));
  const [mostVoted, setMostVoted] = useState(0);

  const getRandomQuote = () => {
    return setSelected(Math.floor(Math.random() * Math.floor(anecdotes.length)));
  }

  const addVote = () => {
    const updatedPoints = [...points];
    updatedPoints[selected] += 1;
    updateMostVoted(updatedPoints);
    return setPoints(updatedPoints);
  }

  const updateMostVoted = (updatedPoints) =>{
    setMostVoted(updatedPoints.indexOf(Math.max(...updatedPoints)));
  }


  return (
    <div>
      <h1>Anecdote of the Day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {points[selected]} votes</p>
      <button onClick={addVote}>Vote</button>
      <button onClick={getRandomQuote}>Next Anecdote</button>

      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[mostVoted]}</p>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]


ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)