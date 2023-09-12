import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";

const AllProduct = (props) => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        axios.get("http://localhost:8000/api/product")
            .then(serverResponse => {
                console.log(serverResponse)
                setProducts(serverResponse.data)
            })
            .catch(serverError => console.log(serverError))
    }, [])
    return (
        <div className='mt-5'>
            <h1> All Products : </h1>
            {products.map(product => <div
            key ={product._id}>
            <h4><Link to={`/${product._id}`}>{product.title}</Link></h4>
            </div>)}
        </div>
    )
}

export default AllProduct