import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons] = useState([
      { name: 'Arto Hellas', number: '040-1234567'},
      { name: 'Ada Lovelace', number: '39-44-5323523' },
      { name: 'Dan Abramov', number: '12-43-234345' },
      { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [ newName, setNewName ] = useState('');
  const [ newNumber, setNewNumber ] = useState('');
  const [ newFilter, setNewFilter ] = useState('');

  const addPerson = (event) => {
      event.preventDefault();
      const names = persons.map((person) => person.name);
      if (names.indexOf(newName) >= 0) {
          alert(`${newName} is already added to the phonebook`);
          return
      }
      const personObj = {
          name: newName,
          number: newNumber
      }
      setPersons(persons.concat(personObj));
      setNewName('');
      setNewNumber('');
  }

  const handleNameChange = (event) => {
      setNewName(event.target.value);
  }
  
  const handleNumberChange = (event) => {
      setNewNumber(event.target.value);
  }

  const handleFilterChange = (event) => {
      setNewFilter(event.target.value);
  }

  const filterPeople = persons.filter((person) => {
      return person.name.includes(newFilter);
  })

  const renderPeople = (arr) => {
    return arr.map((person) => <div key={person.name}>{person.name} {person.number}</div>);
  } 

  return (
    <div>
      <h2>Phonebook</h2>
      filter shown with
      <input
          value={ newFilter }
          onChange={ handleFilterChange }
      />
      <h2>Add a new</h2>
      <form onSubmit={addPerson}>
        <div>
          name: 
            <input
                value={ newName }
                onChange={ handleNameChange }
            />
        </div>
        <div>number:
            <input
                value= { newNumber }
                onChange={ handleNumberChange }
            />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
          {newFilter ?  renderPeople(filterPeople) : renderPeople(persons)}
    </div>
  )
}

export default App