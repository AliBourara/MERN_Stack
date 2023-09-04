import React, { useState } from 'react';
import Display from './Display';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const UserForm = (props) => {
    const [userfirstname, setUserfirstname] = useState("");
    const [userlastname, setUserlastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassmword, setConfirmpassword] = useState("");

    return (
        <>
            <Form style={{display:"flex", flexDirection:"column", alignItems:"center", marginTop:"10%"}}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>First name: </Form.Label>
                    <Form.Control type="text" onChange={(e) => setUserfirstname(e.target.value)} value={userfirstname} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Last name: </Form.Label>
                    <Form.Control type="text" onChange={(e) => setUserlastname(e.target.value)} value={userlastname} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicLastName">
                    <Form.Label>Email Address: </Form.Label>
                    <Form.Control type="text" onChange={(e) => setEmail(e.target.value)} value={email} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password: </Form.Label>
                    <Form.Control type="password" onChange={(e) => setPassword(e.target.value)} value={password} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicLastName">
                    <Form.Label>Password: </Form.Label>
                    <Form.Control type="password" onChange={(e) => setConfirmpassword(e.target.value)} value={confirmpassmword} />
                </Form.Group>
            </Form>
            <Display userfirstname={userfirstname} userlastname={userlastname} email={email} password={password} confirmpassmword={confirmpassmword}/>
        </>
    );
};

export default UserForm;
