import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <div>
      <h1>{props.course.name}</h1>
    </div>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.name} {props.exercise}
    </p>
  )
}

const Content = (props) => {
  const renderParts = props.parts.map((part, index) => {
    return (
      <Part name={part.name} exercise={part.exercises} key={index} />
    )
  })
  return (
    <div>
      {renderParts}
    </div>
  )
}

const Total = (props) => {
  const exercises = props.parts.map((part) => {
    return part.exercises
  })
  const renderTotal = exercises.reduce((a,b) => a + b)
  return (
    <div>
      <p>Number of exercises {renderTotal}</p>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))