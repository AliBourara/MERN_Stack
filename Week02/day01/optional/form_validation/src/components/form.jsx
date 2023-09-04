import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { useReducer } from "react";

const initialState = {
    firstName: {
        value: "",
        error: null,
    },
    lastName: {
        value: "",
        error: null,
    },
    email: {
        value: "",
        error: null,
    },
};

function reducer(state, action) {
    return {
        ...state,
        [action.type]: action.payload,
    };
}

const UserForm = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleUserfirstname = (e) => {
        const { value, name } = e.target;
        let error = null

        if (value.length < 2 && value.length >0) {
            error = "First name too short"
        }

        dispatch({
            type: name,
            payload: {
                value: value,
                error: error,
            }
        });


    }
    const handleUserlastname = (e) => {
        const { value, name } = e.target
        let error = null
        if (value.length < 2 && value.length >0) {
            error=("Last name too short")
        }
        dispatch({
            type: name,
            payload: {
                value: value,
                error: error,
            }
        });
    }
    const handleEmail = (e) => {
        const { value, name } = e.target
        let error = null
        if (value.length < 5 && value.length >0) {
            error=("Email too short")
        }
        dispatch({
            type: name,
            payload: {
                value: value,
                error: error,
            }
        });
    }
    return (
        <>
            <Form
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    marginTop: "10%",
                }}
            >
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>First name: </Form.Label>
                    <Form.Control
                        type="text" name="firstName" value={state.firstName.value} onChange={handleUserfirstname} />
                    {state.firstName.error !== null && (
                        <p className="error">{state.firstName.error}</p>
                    )}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Last name: </Form.Label>
                    <Form.Control
                        type="text" name="lastName" value={state.lastName.value} onChange={handleUserlastname } />
                    {state.lastName.error !== null && (
                        <p className="error">{state.lastName.error}</p>
                    )}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicLastName">
                    <Form.Label>Email Address: </Form.Label>
                    <Form.Control
                        type="text" name="email" value={state.email.value} onChange={handleEmail} />
                    {state.email.error !== null && (
                        <p className="error">{state.email.error}</p>
                    )}
                </Form.Group>
                <button type="submit">Submit</button>
            </Form>
        </>
    );
};

export default UserForm;
