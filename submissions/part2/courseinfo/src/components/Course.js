import React from 'react';

const Header = ({ course }) => <h2>{course.name}</h2>
  
const Total = ({ parts }) => <strong>Number of exercises {parts.reduce(function(sum, part) {return sum + part.exercises}, 0)}</strong>

const Content = ({ course }) => <div> {course.parts.map(part => <Part key={part.id} part={part} />)}</div>

const Part = ({part}) => <p>{part.name} {part.exercises}</p>    


const Course = ({course}) => {  
  return (
    <>
      <Header course={course} />
      <Content course={course}/> 
      <Total parts={course.parts}/>
    </>
  )
}

export default Course