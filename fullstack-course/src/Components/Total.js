import React from 'react';

const Total = ({parts}) => {
    let count = 0;
    parts.map((part) => count += part.exercises);
    return(
        <div>
            <p>Total number of exercises {count}</p>
        </div>
    )
}

export default Total;