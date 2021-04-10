import React, { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])

  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ searchString, setSearchString ] = useState('')
  const [ showAll, setShowAll ] = useState(true)


  
  const handleSearchStringChange = (event) => {
    setSearchString(event.target.value)
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
    
    if (persons.map(person => person.name).includes(newName)) {
      window.alert(`${newName} is already added to phonebook`)
    } else {
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
    }
  }

  const peopleToShow = showAll
  ? persons
  : persons.filter(person => person.name.toLowerCase().includes(searchString.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with<input
                            value={searchString}
                            onChange={handleSearchStringChange}
                            />
      </div>
      <h2>add a new</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input 
                  value={newName} 
                  onChange={handleNameChange} 
                />
        </div>
        <div>
          number: <input
                    value={newNumber}
                    onChange={handleNumberChange}
                  />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {peopleToShow.map(person => <div key={person.name}>{person.name} {person.number}</div>)}
    </div>
  )
}

export default App