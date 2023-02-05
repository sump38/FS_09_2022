import React from 'react'
import Product from './Product'
import './Products.css'

export default function Products({products, handleAddToCart}) {

  return (
    <div className='products'>
    
    {products.map(
        product=>
        <Product product ={product} handleAddToCart={()=>handleAddToCart(product)}>
        </Product>)}

    </div>
  )
}
