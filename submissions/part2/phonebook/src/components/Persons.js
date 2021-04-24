import React from 'react'
import Person from './Person'

const Persons = ({ personsToShow }) => {
    return (
      <>
        {personsToShow.map(person => <Person person={person}  />)}
      </>
    )
  }  

export default Persons