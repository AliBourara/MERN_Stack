import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";

const AllProduct = ({ products, setProducts }) => {
    const deleteProducts = (id) => {
        console.log("Products ID = ", id, "WILL BE DELETED");
        axios.delete(`http://localhost:8000/api/product/${id}`)
            .then(res => {
                console.log(res)
                const filteredProducts = products.filter((product) => product._id != id)
                setProducts(filteredProducts)
            })
            .catch(err => console.log(err))
    }
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
            {products.map((product) =>
                <div key={product._id}>
                    <h4><Link to={`/${product._id}`}>{product.title}</Link></h4>
                    <button className='w-25 bg-danger text-white' onClick={() => deleteProducts(product._id)}>Delete</button>
                </div>)}
        </div>
    )
}

export default AllProduct