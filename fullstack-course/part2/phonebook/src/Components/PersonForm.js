import React from 'react';

const PersonForm = ({addPerson, newName, onNewNameChange, newNumber, onNewNumberChange}) =>{ 
    return (
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
    )};

export default PersonForm;
