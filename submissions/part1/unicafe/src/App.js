import React, { useState } from 'react'

const Button = ({operation, text}) => <button onClick={operation}>{text}</button>


const Statistic = ({param, value}) => <div>{param} {value}</div>
  

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const incrementGood = () => setGood(good + 1)
  const incrementNeutral = () => setNeutral(neutral +1)
  const incrementBad = () => setBad(bad+1)

  return (
    <div>
      <h1>give feedback</h1>
      <Button operation={incrementGood} text="good"/> 
      <Button operation={incrementNeutral} text="neutral"/>
      <Button operation={incrementBad} text="bad"/>

      <h1>statistics</h1>
      <Statistic param="good" value={good}/>
      <Statistic param="neutral" value={neutral}/>
      <Statistic param="bad" value={bad}/>
    </div>
  )
}

export default App
