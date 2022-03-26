import {React, useState, useEffect} from 'react'
import Product from './Product'
const Products = () => {

    const[products, setProducts] = useState([]);
    useEffect( () => {
        fetch('https://ecom-rest-apis.herokuapp.com/api/products')
        .then(response => response.json())
        .then(products => {
            setProducts(products);
            console.log(products);
        });
    }, [] );

    return (
        <div className="container mx-auto pb-24">
            <h1 className="text-lg font-bold my-8" >Products</h1>
            <div className="grid grid-cols-5 gap-20">
                {
                    products.map(product => <Product key={product._id} _id={product._id} title={product.name} size={product.size} price={product.price} img={product.image}  />)
                }
                {/* <Product /> */}
            </div>
        </div>
    )
}

export default Products
