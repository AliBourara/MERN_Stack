import React, { useState, useEffect } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom';

const AllAuthors = () => {
    const SortByName = (a, b) =>{
        const nameA = a.firstName.toUpperCase(); // ignore upper and lowercase
        const nameB = b.firstName.toUpperCase(); // ignore upper and lowercase
        if (nameA > nameB) {
            return 1;
        }
        if (nameA < nameB) {
            return -1;
        }
        // names must be equal
        return 0;
    }
    const [authors, setAuthors] = useState([])
    const deleteAuthor = (id) => {
        console.log("NOTE ID = ", id, "WILL BE DELETED");
        axios.delete(`http://localhost:8000/api/authors/${id}`)
            .then(res => {
                console.log(res)
                const filteredAuthors = authors.filter((author) => author._id != id)
                setAuthors(filteredAuthors.sort(SortByName))
            })
            .catch(err => console.log(err))
    }
    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
            .then(serverResponse => {
                console.log("SERVER RESPONSE", serverResponse);
                setAuthors(serverResponse.data.sort(SortByName))
            })
            .catch(serverError => {
                console.log("SERVER ERROR", serverError);
            })
    }, [])

    return (
        <div>
            <Link className='h2' to={'/authors/new'}>Add An Author</Link>
            <h4>We have quotes by :</h4>
            <div className="border border-dark">
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th>Authors</th>
                            <th>Action Available</th>
                        </tr>
                    </thead>
                    <tbody>
                        {authors.map(author =>
                            <tr key={author._id}>
                                <td><Link to={`/${author._id}`}>{author.firstName} {author.lastName}</Link></td>
                                <td>
                                    <Link to={`/authors/${author._id}/edit`} className='btn btn-info' style={{ width: "100px", height: "40px" }} >Edit</Link>
                                    <button className='btn btn-danger' style={{ width: "100px", height: "40px" }} onClick={() => deleteAuthor(author._id)}>Delete</button>
                                </td>
                            </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default AllAuthors