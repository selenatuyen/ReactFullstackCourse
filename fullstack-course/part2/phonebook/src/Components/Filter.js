import React from 'react';

const Filter = ({filterSearch, onFilter}) => {
    return (
        <div>
            filter shown with <input onChange={onFilter}></input>
        </div>
    )
}

export default Filter;