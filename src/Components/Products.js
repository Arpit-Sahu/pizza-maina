import React from 'react'
import Product from './Product'

const products = () => {
    return (
        <div className="container mx-auto pb-24">
            <h1 className="text-lg font-bold my-8" >Products</h1>
            <div className="grid grid-cols-5 gap-24">
                <Product />
            </div>
        </div>
    )
}

export default products
