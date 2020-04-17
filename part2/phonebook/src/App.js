import React, { useState, useEffect } from 'react'
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import Notification from './components/Notification';
import personsService from './services/persons';


const App = () => {
  const [ persons, setPersons] = useState([]) 
  const [ newName, setNewName ] = useState('');
  const [ newNumber, setNewNumber ] = useState('');
  const [ newFilter, setNewFilter ] = useState('');
  const [ message, setMessage ] = useState(null);
  const [ messageClass, setMessageClass ] = useState('error');


    const notify = (message, msgClass) => {
        setMessage(message);
        setMessageClass(msgClass);
        setTimeout(() => setMessage(null), 5000);
    }

    useEffect(() => {
        personsService.getAll()
        .then(personsData => setPersons(personsData))
        .catch(error => {
            notify(`Could not get persons data. ${error}`, 'error')
        });
    }, [])

    const existing = (name) => {
        // returns true if person with name 'name' already in persons
        const person = persons.filter(person => person.name === name);
        return (person.length === 1);
    }

    const getPerson = (name) => {
        return persons.filter(person => person.name === name)[0];
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
                notify(`Successfully updated ${person.name}'s phone number`, 'success');
            })
            .catch(error => {
                notify(`Could not update ${person.name}'s data. ${error}`, 'error');
            });
    }

    const addPerson = (event) => {
        event.preventDefault();
        if (existing(newName)) {
            updateNumber(getPerson(newName))
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
                notify(`Added ${newName}`, 'success')
            })
            .catch(error => {
                notify(`${newName} is already in phonebook. ${error}`, 'error');
            })
        }
    }
  
    const handleDelete = (person) => {
        if (window.confirm(`Delete ${person.name}?`)) {
            personsService.deletePerson(person.id)
                .then(response => {
                    setPersons(persons.filter(person => person.id !== response.id));
                })
                .catch(error => {
                    notify(`Could not delete ${person.name}. ${error}`, 'error');
                });  
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
        <Notification message={message} messageClass={messageClass} />
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