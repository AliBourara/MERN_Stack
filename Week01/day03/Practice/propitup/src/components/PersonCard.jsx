import React, { Component } from 'react'

class PersonCard extends Component {
    render() {
        return (
            <div>
                <h1>
                    {this.props.person.firstName} {this.props.person.lastName}
                </h1>
                <h2>Age : {this.state.personAge}</h2>
                <h2>Hair Color : {this.props.person.hairColor}</h2>
                <button>
                    Birthday button for {this.props.person.firstName} {this.props.person.lastName}
                </button>
            </div>
        );
    }
}
export default PersonCard