import React from 'react';
import Part from './Part';

const Content = ({course}) => {
    return (
        <>
            {course.parts.map((part) => {
                return (
                    <Part name={part.name} exercises={part.exercises}/>
                );
            })}
        </>
    )
}

export default Content;