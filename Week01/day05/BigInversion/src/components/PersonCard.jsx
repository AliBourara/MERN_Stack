import React from 'react';

const PersonCard = (props) => {
        return (
            <div>
                <h1>
                    {props.person.lastName} {props.person.firstName}
                </h1>
                <h2>Age : {props.person.age}</h2>
                <h2>Hair Color : {props.person.hairColor}</h2>
            </div>
        );
    }

export default PersonCard