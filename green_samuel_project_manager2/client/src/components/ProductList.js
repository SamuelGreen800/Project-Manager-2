import React, { useEffect}  from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

const ProductList = (props) => {

    const {productList, setProductList} = props;

    useEffect(() =>{
        axios.get("http://localhost:8000/api/products")
        .then((res) => {
            console.log(res.data);
            setProductList(res.data);
        })
        .catch((err) =>{
            console.log(err)
        })
    }, [])

    return (
        <div className="text-center m-5 px-5 bg-secondary w-25 p-5 mx-5 border">
            <h1>All Products:</h1>
            {
                productList.map((product, index) => {
                    return <div key={index} className="my-3"> 
                    <Link to={`/products/${product._id}`} className="fw-bold  text-dark"> {product.title}</Link> </div>
                    
                })
            }
        </div>
    )
}
export default ProductList;