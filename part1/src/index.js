import React from 'react'
import ReactDOM from 'react-dom'

const Hello = (props) => (
  <div>
    <p>Hello {props.name}</p>
    <p>You are {props.age} years old</p>
  </div>
)

const App = () => {
  const name ="Andy"
  const age = 10
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name={name} age={age} />
      <Hello name="Mya" age={2+5} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
