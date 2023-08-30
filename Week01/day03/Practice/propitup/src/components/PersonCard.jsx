import React, { Component } from 'react'

class PersonCard extends Component {
    render() {
        return (
            <div>
                {this.props.person.map((person,index)=> <div>
                    <h1>{person.firstName} {person.lastName}</h1>
                    <h2>Age : {person.age}</h2>
                    <h2>Hair Color : {person.hairColor}</h2>
                </div>)}
            </div>
            
        )
    }
}
export default PersonCard