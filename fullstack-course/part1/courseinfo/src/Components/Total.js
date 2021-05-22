import React from 'react';

const Total = ({course}) => {
    let count = 0;
    course.parts.map((part) => count += part.exercises);
    return(
        <div>
            <p>Total number of exercises {count}</p>
        </div>
    )
}

export default Total;