import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {Link, useParams} from "react-router-dom";


const ProductDetail = (props) => {
    const [oneProduct, setOneProduct  ] = useState({});
    const {id} = useParams(); 

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then( res => {
                console.log(res.data);
                setOneProduct(res.data);
            })
            .catch( err => console.log(err) )
    }, [id])
    return (
        <div className='bg-dark vh-100 text-center '>
            <h1 className='text-primary p-4 text-center fw-bolder text-decoration-underline'>Product Details:</h1>
            <div className='mx-auto container p-3 text-start col-6 bg-secondary'>
                <h3 className='my-4'><span className='fw-bold h2'>Title:</span> {oneProduct.title}</h3>
                <h3 className='my-4'><span className='fw-bold h2'>Price:</span> ${oneProduct.price}</h3>
                <h3 className='my-4'><span className='fw-bold h2'>Description:</span> {oneProduct.description}</h3>
            </div>
            <Link to={'/'} className="mx-auto h4 btn btn-primary text-dark fw-bold m-5">Home</Link>
        </div>
    )
}
export default ProductDetail;

