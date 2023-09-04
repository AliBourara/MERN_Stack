import React, { useState } from 'react';
import Display from './Display';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const UserForm = (props) => {
    const [userfirstname, setUserfirstname] = useState("");
    const [userfirstnameError, setUserfirstnameError] = useState("")
    const [userlastname, setUserlastname] = useState("");
    const [userlastnameError, setUserlastnameError] = useState("")
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("")
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("")
    const [confirmpassmword, setConfirmpassword] = useState("");
    const [confirmpasswordError, setConfirmPasswordError] = useState("")

    const handleUserfirstname = (e) =>{
        setUserfirstname(e.target.value)
        if (e.target.value == ""){
            setUserfirstnameError("")
        }
        else if(e.target.value.length<2){
            setUserfirstnameError("First name too short")
        }
        else{
            setUserfirstnameError("")
        }
    }
    const handleUserlastname = (e) =>{
        setUserlastname(e.target.value)
        if (e.target.value == ""){
            setUserlastnameError("")
        }
        else if (e.target.value.length<2){
            setUserlastnameError("Last name too short")
        }
        else{
            setUserlastnameError("")
        }
    }
    const handleEmail = (e) =>{
        setEmail(e.target.value)
        if (e.target.value == ""){
            setEmailError("")
        }
        else if (e.target.value.length<5){
            setEmailError("Email Not Valid")
        }
        else{
            setEmailError("")
        }
    }
    const handlePassword = (e) =>{
        setPassword(e.target.value)
        if (e.target.value == ""){
            setPasswordError("")
        }
        else if (e.target.value.length<8){
            setPasswordError("Password Not Valid")
        }
        else{
            setPasswordError("")
        }
    }
    const handleConfirmPassword = (e) =>{
        setConfirmpassword(e.target.value)
        if (e.target.value != password){
            setConfirmPasswordError("Don't much your passeword")
        }
        else{
            setConfirmPasswordError("")
        }
    }

    return (
        <>
            <Form style={{display:"flex", flexDirection:"column", alignItems:"center", marginTop:"10%"}}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>First name: </Form.Label>
                    <Form.Control type="text" onChange={(e) => handleUserfirstname(e)} value={userfirstname} />
                    <Form.Text className="text-danger" >
                        {userfirstnameError}
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Last name: </Form.Label>
                    <Form.Control type="text" onChange={(e) => handleUserlastname(e)} value={userlastname} />
                    <Form.Text className="text-danger" >
                        {userlastnameError}
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicLastName">
                    <Form.Label>Email Address: </Form.Label>
                    <Form.Control type="text" onChange={(e) => handleEmail(e)} value={email} />
                    <Form.Text className="text-danger" >
                        {emailError}
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password: </Form.Label>
                    <Form.Control type="password" onChange={(e) => handlePassword (e)} value={password} />
                    <Form.Text className="text-danger" >
                    {passwordError}
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicLastName">
                    <Form.Label>Confirm Password: </Form.Label>
                    <Form.Control type="password" onChange={(e) => handleConfirmPassword(e)} value={confirmpassmword} />
                </Form.Group>
                <Form.Text className="text-danger" >
                    {confirmpasswordError}
                </Form.Text>
            </Form>
        </>
    );
};

export default UserForm;
