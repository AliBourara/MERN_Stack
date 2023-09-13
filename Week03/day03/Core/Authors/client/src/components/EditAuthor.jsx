import React from 'react'
import { useState,useEffect } from 'react'
import { useParams } from "react-router-dom"
import axios  from 'axios';
import {useNavigate} from 'react-router-dom'
import { Link } from 'react-router-dom';

const EditAuthor = () => {
    const [author, setAuthor] = useState({firstName:"",lastName:""})
    const navigate = useNavigate()
    const [errors, setErrors] = useState({firstName:"",lastName:""})
    const {id} = useParams()
    const updateAuthor = (e) => {
        e.preventDefault()
        axios.put('http://localhost:8000/api/authors/'+id,author)
        .then(response => {
            console.log(response.data);
            navigate('/authors')
        })
        .catch(error => {
            const serverError = error.response.data
            console.log("BACKEND ERROR : " ,serverError)
            const errs = {firstName:'',lastName:''}
            for (let label of Object.keys(serverError)){
                console.log("ERROR LABEL : ",label,'-----',"ERROR VALUE ",serverError[label].message);
                errs[label]=serverError[label].message
            }
            console.log("All BACKEND ERRORS : ",errs);
            setErrors({...errors,...errs})
        })
    }
    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then(res => {
                setAuthor(res.data)
            })
            .catch(err => console.log(err));
        }, [id])

    return (
        <div>
            <Link to={'/'} >Home</Link>
            <br />
            <p className='text-info'>Edit this Author</p>
            <div className="border border-dark">
            <form onSubmit={updateAuthor}>
                <div className="form-group m-3">
                    <label htmlFor="">First Name</label>
                    <input type="text" className="form-control" 
                    onChange ={(e)=>setAuthor({...author,firstName:e.target.value})} 
                    value={author.firstName}/>
                    {errors.firstName && <span className='text-danger'>{errors.firstName}</span> }
                </div>
                <div className="form-group m-3">
                    <label htmlFor="">Last Name</label>
                    <input type="text" className="form-control" 
                    onChange ={(e)=>setAuthor({...author,lastName:e.target.value})}
                    value={author.lastName}></input>
                    {errors.lastName && <span className='text-danger'>{errors.lastName}</span> }
                </div>
                <div className='d flex  m-4'>
                    <Link className='btn btn-outline-primary w50 me-3' to={'/'} >Cancel</Link>
                    <button className='btn btn-outline-primary w50 me-3' >Edit</button>
                </div>
            </form>
            </div>
        </div>
    )
}

export default EditAuthor