import React, { useState } from 'react';
import Filter from "./Components/Filter";
import PersonForm from "./Components/PersonForm";
import Persons from "./Components/Persons";

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
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