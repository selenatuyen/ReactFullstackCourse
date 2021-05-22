import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')

  const onNewNameChange = (event) => {
      setNewName(event.target.value);
  }

  const onNewNumberChange = (event) => {
    setNewNumber(event.target.value);
  }

  const addPerson = (event) =>{
    event.preventDefault();

    if(persons.map(p => p.name).indexOf(newName) !== -1){
      window.alert(`${newName} is already added to phonebook`);
    }
    else{
      const person = {
        name: newName,
        number: newNumber
      }
  
      setPersons(persons.concat(person));
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={onNewNameChange}></input>
        </div>
        <div>
          number: <input value={newNumber} onChange={onNewNumberChange}></input>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => 
        <li id={person.name}>{person.name} {person.number}</li>)}
    </div>
  )
}

export default App;