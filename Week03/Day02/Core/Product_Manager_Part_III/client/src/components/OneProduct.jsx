import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';

const OneProduct = (props) => {
    const [product, setProduct] = useState({})
    const { id } = useParams();
    const updateProject = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/product/' + id+'/edit', product)
            .then(res => console.log(res))
            .catch(err => console.error(err));
    }
    useEffect(() => {
        axios.get("http://localhost:8000/api/product/" + id)
            .then(res => {
                setProduct(res.data);
            })
            .catch(err => console.log(err));
    }, [id])

    return (
        <div >
            <div>
                <h1>{product.title}</h1>
                <h2>{product.price}</h2>
                <p>
                    {product.description}
                </p>
            </div>
            <fieldset>
                <legend>Edit</legend>
                <form onSubmit={updateProject}>
                    <p className="border border-dark d-flex justify-content-between p-2">
                        Title :
                        <input type="text" onChange={(e) => setProduct({ ...product, title: e.target.value})} value={product.title} placeholder={product.title} />
                    </p>
                    <p className="border border-dark d-flex justify-content-between p-2">
                        Price :
                        <input type="number" onChange={(e) => setProduct({ ...product, price: e.target.value })} value={product.price} placeholder={product.price} />
                    </p>
                    <p className="border border-dark d-flex justify-content-between p-2">
                        Description :
                        <input type="text" onChange={(e) => setProduct({ ...product, description: e.target.value })} value={product.description} placeholder={product.description} />
                    </p>
                    <button className='w-50 bg-succes text-white'>Edit</button>
                </form>
            </fieldset>
            <div className='mt-4'>
                <Link to='/'>Home</Link>
            </div>
        </div>
    )
}

export default OneProduct;