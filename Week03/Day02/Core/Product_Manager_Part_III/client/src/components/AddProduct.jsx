import React, { useState } from 'react'
import axios from 'axios'


const AddProduct = ({handleAddProduct}) => {
    const [product, setProduct] = useState({title :"",price : 0 , description :""})
    const formHandler = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8000/api/product",product)
        .then(serverResponse => {
            console.log(serverResponse)
            console.log(">>>>>>Product Submited<<<<<<", product)
            handleAddProduct({...product,_id:serverResponse.data._id})
        })
        .catch(serverError => console.log(serverError))
        setProduct({title :"",price : 0 , description :""})
    }
    return (
        <div>
            <h1 className='mb-5'>Product Manager</h1>
            <form onSubmit={formHandler}>
                <p className="border border-dark d-flex justify-content-between p-2">
                    Title : 
                    <input type="text" onChange={(e) => setProduct({ ...product, title: e.target.value })} value={product.title}/>
                </p>
                <p className="border border-dark d-flex justify-content-between p-2">
                    Price : 
                    <input type="number" onChange={(e) => setProduct({ ...product, price: e.target.value })} value={product.price}/>
                </p>
                <p className="border border-dark d-flex justify-content-between p-2">
                    Description : 
                    <input type="text" onChange={(e) => setProduct({ ...product, description: e.target.value })} value={product.description}/>
                </p>
                <button className='w-50 bg-info text-white'>Create</button>
            </form>
        </div>
    )
}

export default AddProduct