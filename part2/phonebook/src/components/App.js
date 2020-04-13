import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const addPerson = (event) => {
      event.preventDefault();
      const personObj = {
          name: newName
      }
      setPersons(persons.concat(personObj));
      setNewName('');
  }

  const handleNameChange = (event) => {
      setNewName(event.target.value);
  }

  const renderPeople = persons.map((person) => {
      return <div key={person.name}>{person.name}</div> });

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: 
        <input
            value={ newName }
            onChange={ handleNameChange }
        />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
          {renderPeople}
    </div>
  )
}

export default App