import React from 'react';

const Person = (props) => {
    return (
        <div>
            <p>Im a {props.name} and {props.age} years old!</p>
            <p>{props.children}</p>
        </div>
    );
}

export default Person;
