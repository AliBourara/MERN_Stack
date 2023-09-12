import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";
    
const OneProduct = (props) => {
    const [product, setProduct] = useState({})
    const { id } = useParams();
    
    useEffect(() => {
        axios.get("http://localhost:8000/api/product/"+id)
            .then(res => {
                setProduct(res.data);
            })
            .catch(err => console.log(err));
    }, [id])

    return(
        <div >
            <div>
                <h1>{product.title}</h1>
                <h2>{product.price}</h2>
                <p>
                    {product.description}
                </p>
            </div>
        </div>
    )
}
    
export default OneProduct;