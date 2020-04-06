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

const Display = ({ name, data }) => {
    return (
        <div>
            {name} {data}
        </div>
    )
}

const Statistic = ({name, data}) => {
    return (
        <Display name={name} data={data} />
    )
}

const Statistics = (props) => {
    if (props.total === 0) {
        return (
            <div>
                <h1>Statistics</h1>
                <div>No feedback given</div>
            </div>
        )
    }
    return (
        <div>
            <h1>Statistics</h1>
            <Statistic name="good" data={props.good} />
            <Statistic name="neutral" data={props.neutral} />
            <Statistic name="bad" data={props.bad} />
            <Statistic name="all" data={props.total} />
            <Statistic name="average" data={props.avg} />
            <Statistic name="positive" data={props.positive} />
        </div>
    )
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const state = [good, neutral, bad];
  
  const handleClick = (changeState) => () => {
      changeState(prevState => prevState + 1);
  }

  const total = () => [good, neutral, bad].reduce((a,b) => a + b);
  const avg = () => {
      // (good: 1, neutral: 0, bad: -1)
      if (total() === 0) {
          return 0;
      }
      return ((good*1 + neutral*0 + bad*-1)/total());
  }
  const positive = () => {
      if (total() === 0) {
          return 0;
      }
      return good/total();
  }

  return (
    <div>
      <h1>give feedback</h1>
        <Button name={"good"} handleClick={handleClick(setGood)} />
        <Button name={"neutral"} handleClick={handleClick(setNeutral)} />
        <Button name={"bad"} handleClick={handleClick(setBad)} />
        <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total()}
            avg={avg()}
            positive={positive()}
        />
     </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)