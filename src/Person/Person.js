import React from 'react';
import './Person.scss';

const Person = (props) => {
    return (
        <div className="person">
            <p>Im a {props.name} and {props.age} years old!</p>
            {
                props.children ? <p>{props.children}</p> : null
            }
            <input type="text" name="" id=""
                onChange={props.changed}
            />
            <button onClick={props.click}>Delete</button>
        </div>
    );
}

export default Person;