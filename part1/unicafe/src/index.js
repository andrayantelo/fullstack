import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Button = ({name, handleClick}) => {
    return (
        <div>
            <button onClick={handleClick}>
                {name}
            </button>
        </div>
    )
}

const Display = ({ name, feedback }) => {
    return (
        <div>
            {name} {feedback}
        </div>
    )
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  const handleClick = (changeState) => () => {
      changeState(prevState => prevState + 1);
  }

  return (
    <div>
      <h1>give feedback</h1>
        <Button name={"good"} handleClick={handleClick(setGood)} />
        <Button name={"neutral"} handleClick={handleClick(setNeutral)} />
        <Button name={"bad"} handleClick={handleClick(setBad)} />
      <h1>Statistics</h1>
        <Display name={"good"} feedback={good} />
        <Display name={"neutral"} feedback={neutral} />
        <Display name={"bad"} feedback={bad} />
     </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)