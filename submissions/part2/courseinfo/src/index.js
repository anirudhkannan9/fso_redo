import React from 'react';
import ReactDOM from 'react-dom';

const Header = ({ course }) => <h1>{course.name}</h1>
  
const Total = ({ parts }) => <strong>Number of exercises {parts.reduce(function(sum, part) {return sum + part.exercises}, 0)}</strong>

const Part = ({part}) => <p>{part.name} {part.exercises}</p>    

const Content = ({ course }) => <div> {course.parts.map(part => <Part key={part.id} part={part} />)}</div>

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
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
  }
  
  return <Course course={course} />
}

const Course = ({course}) => {  
  return (
    <>
      <Header course={course} />
      <Content course={course}/> 
      <Total parts={course.parts}/>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))