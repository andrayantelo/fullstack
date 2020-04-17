import React, { useState, useEffect } from 'react'
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import personsService from './services/persons';


const App = () => {
  const [ persons, setPersons] = useState([]) 
  const [ newName, setNewName ] = useState('');
  const [ newNumber, setNewNumber ] = useState('');
  const [ newFilter, setNewFilter ] = useState('');

  useEffect(() => {
      personsService.getAll()
      .then(personsData => setPersons(personsData))
      .catch(error => console.log("could not get persons data", error));
  }, [])

    const existing = (name) => {
        // returns true if person with name 'name' already in personss
        return persons.filter(person => person.name === name);
    }

    const clearForm = () => {
        setNewName('');
        setNewNumber('');
    }

    const updateNumber = (person) => {
        const personObj = {
            ...person,
            number: newNumber
        }
        personsService.update(person.id, personObj)
            .then(updatedPerson => {
                setPersons(persons.filter(p => p.id !== person.id).concat(updatedPerson));
                clearForm();
            })
            .catch(error => console.error(error));
    }

    const addPerson = (event) => {
        event.preventDefault();
        if (existing(newName)) {
            updateNumber(existing(newName)[0])
        }
        else {
            const personObj = {
                name: newName,
                number: newNumber
            }
            personsService.create(personObj)
                .then(newPerson => {
                setPersons(persons.concat(newPerson));
                clearForm();
            })
            .catch(error => {
                alert(`${newName} is already added to the phonebook`);
            })
        }
  }
  
  const handleDelete = (person) => {
    if (window.confirm(`Delete ${person.name}?`)) {
        personsService.deletePerson(person.id)
          .then(response => {
              setPersons(persons.filter(person => person.id !== response.id));
          })
          .catch(error => console.log("an error occurred: ", error));  
      }
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
  return arr.map((person) => {
      return (
          <div key={person.id}>
               {person.name} {person.number}
               <button onClick={() => handleDelete(person)} value={person.id}>delete</button>
          </div>
      )
      });
  } 
  return (
    <div>
      <h2>Phonebook</h2>
          <Filter handleChange={handleFilterChange} newFilter={newFilter} />
      <h2>Add a new</h2>
          <PersonForm
              addPerson={addPerson}
              newName={newName}
              handleNameChange={handleNameChange}
              newNumber={newNumber}
              handleNumberChange={handleNumberChange}
          />
      <h2>Numbers</h2>
          <Persons
              newFilter={newFilter}
              renderPeople={renderPeople}
              filterPeople={filterPeople}
              persons={persons}
          />
    </div>
  )
}

export default App