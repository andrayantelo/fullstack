import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => {
  return (
    <div>
      <button onClick={props.handleClick}>{props.name}</button>
    </div>
  )
}

const App = (props) => {
  const [selected, setSelected] = useState(0);
  const initialPoints = new Array(5+1).join('0').split('').map(parseFloat);
  const [points, setPoints] = useState(initialPoints);

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  }

  const handleClick = () => {
      const index = getRandomInt(5);
      setSelected(index);
  }

  const vote = () => {
      const copy = [...points];
      copy[selected] += 1;
      setPoints(copy);
  }

  const getMax = (arr) => {
      return arr.indexOf(Math.max(...arr))
  }

  return (
    <div>
      <h1>Anecdote of the Day</h1>
      {props.anecdotes[selected]}
      <Button name={"vote"} handleClick={vote} />
      <Button name={"get anecdote"} handleClick={handleClick} />
      <h1>Anecdote with most votes</h1>
      {props.anecdotes[getMax(points)]}
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
