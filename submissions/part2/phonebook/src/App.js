import React, { useEffect, useState } from 'react'
import Filter from './components/Filter'
import Person from './components/Person'
import PersonForm from './components/PersonForm'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ search, setSearch ] = useState('')
  const [ showAll, setShowAll ] = useState(true)

  useEffect(() => {
    personService
      .getAll()
      .then(response => {
        setPersons(response)
      })
    
  }, [])

  const handleSearchChange = (event) => {
    setSearch(event.target.value)
    setShowAll(false)
  }

  const handleNameChange = (event) => setNewName(event.target.value)
  
  const handleNumberChange = (event) => setNewNumber(event.target.value)

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }

    if (persons.map(person => person.name.toLowerCase()).includes(newName.toLowerCase())) {
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        const thisPerson = persons.filter(person => person.name.toLowerCase() === newName.toLowerCase())
        const oldPersonObject = thisPerson[0]
        const newPersonObject = { ...oldPersonObject, number: newNumber }
        personService
          .update(newPersonObject.id, newPersonObject)
          .then(response => {
            setPersons(persons.map(person => person.id === newPersonObject.id ? newPersonObject : person))
          })
      }      
    } else {

      personService
        .create(personObject)
        .then(response => {
          setPersons(persons.concat(personObject))
          setNewName('')
          setNewNumber('')
        })
    }
  }

  const deletePerson = (person) => {
    const id = person.id
    console.log(id, ' needs to be deleted' )
    if (window.confirm(`Delete ${person.name}?`)) {
      personService
        .deletePerson(id)
        .then(response => 
          setPersons(persons.filter(person => person.id !== id))
        )
    }
  }

  const personsToShow = showAll
  ? persons
  : persons.filter(person => person.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter search={search} handleSearchChange={handleSearchChange}/>

      <h3>Add a new</h3>

      <PersonForm
        addPerson={addPerson}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />

      <h3>Numbers</h3>
      {personsToShow.map((person, i) => 
        <Person
          key={i}
          person={person}
          deletePerson={() => deletePerson(person)}
        />
      )}

    </div>
  )
}

export default App