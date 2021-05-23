import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from "./Components/Filter";
import PersonForm from "./Components/PersonForm";
import Persons from "./Components/Persons";

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('');
  const [ newNumber, setNewNumber ] = useState('');
  const [ filterSearch, setFilterSearch] = useState('');
  const filterPersons = filterSearch === "" ? persons : persons.filter(p => p.name.toLowerCase().indexOf(filterSearch.toLowerCase()) !== -1);

  const onNewNameChange = (event) => {
      setNewName(event.target.value);
  }

  const onNewNumberChange = (event) => {
    setNewNumber(event.target.value);
  }

  const onFilter = (event) => {
    setFilterSearch(event.target.value);
  }

  const addPerson = (event) =>{
    event.preventDefault();

    if(persons.map(p => p.name.toLowerCase()).includes(newName.toLowerCase())){
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

  useEffect(() => {
    // console.log('effect')
    axios
      .get('http://localhost:3001/persons').then(response => {
        // console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])

  return (
    <div>
      <h2>Phonebook</h2>
        <Filter filterSearch={filterSearch} onFilter={onFilter}></Filter>
      <h3>Add a new</h3>
        <PersonForm addPerson={addPerson} newName={newName} onNewNameChange={onNewNameChange} newNumber={newNumber} onNewNumberChange={onNewNumberChange}></PersonForm>

      <h2>Numbers</h2>
        <Persons persons={filterPersons}></Persons>
    </div>
  )
}

export default App;