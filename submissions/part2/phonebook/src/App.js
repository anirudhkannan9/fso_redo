import React, { useEffect, useState } from 'react'
import Filter from './components/Filter'
import Person from './components/Person'
import PersonForm from './components/PersonForm'
import SuccessNotification from './components/SuccessNotification'
import ErrorNotification from './components/ErrorNotification'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ search, setSearch ] = useState('')
  const [ showAll, setShowAll ] = useState(true)
  const [ successMessage, setSuccessMessage ] = useState(null)
  const [ errorMessage, setErrorMessage ] = useState(null)

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

    if (persons.map(person => person.name.toLowerCase().trim()).includes(newName.toLowerCase().trim())) {
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        const thisPerson = persons.filter(person => person.name.toLowerCase().trim() === newName.toLowerCase().trim())
        const oldPersonObject = thisPerson[0]
        const newPersonObject = { ...oldPersonObject, number: newNumber }
        personService
          .update(newPersonObject.id, newPersonObject)
          .then(response => {
            setSuccessMessage(`Updated ${newPersonObject.name}'s number`)
            setTimeout(() => {
              setSuccessMessage(null)
            }, 5000)
            setPersons(persons.map(person => person.id === newPersonObject.id ? newPersonObject : person))
          })
          .catch(error => {
            setNewName('')
            setNewNumber('')
            personService
              .getAll()
              .then(response => {
                setPersons(response)
              })
            setErrorMessage(`${newPersonObject.name} has already been removed from server`)
            setTimeout(() => {
              setErrorMessage(null)
            }, 5000)
          })
      }      
    } else {

      personService
        .create(personObject)
        .then(response => {
          setPersons(persons.concat(personObject))
          setNewName('')
          setNewNumber('')
          setSuccessMessage(`Added ${personObject.name}`)
          setTimeout(() => {
            setSuccessMessage(null)
          }, 5000)
          
        })
    }
  }

  const deletePerson = (person) => {
    const id = person.id
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
      <SuccessNotification message={successMessage} />
      <ErrorNotification message={errorMessage} />
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