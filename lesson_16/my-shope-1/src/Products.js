import React from 'react'
import Product from './Product'
import "./Products.css";

export default function Products({products,addToCart}) {
    console.log(products);
  return (
    <div className='products'>
    {products.map(product => <Product product={product} addToCart={()=>addToCart(product)}></Product>)}

    </div>
  )
}
