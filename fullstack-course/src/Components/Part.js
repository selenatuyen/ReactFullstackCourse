import React from 'react';

const Part = (props) => {
    return (
        <div>
            <p>{props.partNumber} {props.exerciseNumber}</p>
        </div>
    )
}

export default Part;