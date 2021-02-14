import React from 'react';
import Part from './Part';

const Content = (props) => {
    return (
        <div>
            <Part partNumber={props.part1} exerciseNumber={props.exercises1}></Part>
            <Part partNumber={props.part2} exerciseNumber={props.exercises2}></Part>
            <Part partNumber={props.part3} exerciseNumber={props.exercises3}></Part>
        </div>
    )
}

export default Content;