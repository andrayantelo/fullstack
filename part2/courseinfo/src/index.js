import React from 'react';
import ReactDOM from 'react-dom';
import Course from './components/Course';

/*

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
}*/

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  const renderCourse = courses.map((course) => {
    return <Course course={course} />
  })

  return (
    <div>
      {renderCourse}
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))