import React from 'react'

const Display = (props) => {
    console.log(props);
    return (
        <div>
            <h2>Your Form Data</h2>
            <h3>First Name : {props.userfirstname}</h3>
            <h3>Last Name : {props.userlastname}</h3>
            <h3>Email : {props.email}</h3>
            <h3>Password : {props.password}</h3>
            <h3>Confirm Password  : {props.confirmpassmword}</h3>
        </div>
        
    )
}

export default Display