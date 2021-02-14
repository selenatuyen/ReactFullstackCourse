import React from 'react';
import Part from './Part';

const Content = (props) => {
    return (
        <div>
            <Part partNumber={props.part1.name} exerciseNumber={props.part1.exercises}></Part>
            <Part partNumber={props.part2.name} exerciseNumber={props.part2.exercises}></Part>
            <Part partNumber={props.part3.name} exerciseNumber={props.part3.exercises}></Part>
        </div>
    )
}

export default Content;