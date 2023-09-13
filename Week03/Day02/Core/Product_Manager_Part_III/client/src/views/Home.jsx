import React from 'react'
import AddProduct from '../components/AddProduct'
import AllProduct from '../components/AllProduct'
import { useState } from 'react'


const Home = () => {
    const [products, setProducts] = useState([])

    const handleAddProduct = (product) => {
        setProducts([...products,product])
    }

    return (
        <>
            <AddProduct handleAddProduct={handleAddProduct} />
            <AllProduct products={products} setProducts={setProducts} />
        </>)
}


export default Home