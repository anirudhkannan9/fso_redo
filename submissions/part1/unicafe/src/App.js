import React, { useState } from 'react'

const Button = ({operation, text}) => <button onClick={operation}>{text}</button>
const Statistic = ({text, value}) => <div>{text} {value}</div>
  
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const incrementGood = () => setGood(good + 1)
  const incrementNeutral = () => setNeutral(neutral +1)
  const incrementBad = () => setBad(bad+1)

  if (good === 0 && neutral === 0 && bad === 0) {
    console.log(good === 0 && neutral === 0 && bad === 0)
    return (
      <div>
        <h1>give feedback</h1>
        <Button operation={incrementGood} text="good"/> 
        <Button operation={incrementNeutral} text="neutral"/>
        <Button operation={incrementBad} text="bad"/>

        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  } 
  console.log(good === 0 && neutral === 0 && bad === 0)
  return (
    <div>
      <h1>give feedback</h1>
      <Button operation={incrementGood} text="good"/> 
      <Button operation={incrementNeutral} text="neutral"/>
      <Button operation={incrementBad} text="bad"/>

      <h1>statistics</h1>
      <Statistic text="good" value={good}/>
      <Statistic text="neutral" value={neutral}/>
      <Statistic text="bad" value={bad}/>
      <Statistic text="all" value={good+bad+neutral}/>
      <Statistic text="average" value={(good - bad)/(good+bad+neutral)}/>
      <Statistic text="positive (%)" value={(good/(good+neutral+bad))*100}/>

    </div>
  )
  
}

export default App
