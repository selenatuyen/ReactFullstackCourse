import React from 'react'
import ReactDOM from 'react-dom'

//Components
import Header from './Components/Header';
import Content from './Components/Content';
import Total from './Components/Total';

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course}></Header>
      <Content part1={part1} part2={part2} part3={part3}></Content>
      <Total total={part1.exercises + part2.exercises + part3.exercises}></Total>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))