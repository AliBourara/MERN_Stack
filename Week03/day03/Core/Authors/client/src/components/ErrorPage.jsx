import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
    return (
        <>
        <div class="d-flex align-items-center justify-content-center bg-info">
            <h1 class="display-5 fw-bold text-white"> "We're sorry, but we could not find the author you are looking for. Would you like to add this author to our database?"</h1>
        </div>
            <Link className='h2' to={'/authors/new'}>Add An Author</Link>
        </>
    )
}

export default ErrorPage