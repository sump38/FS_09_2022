import React from 'react'
import './Product.css'

export default function Product({product, handleAddToCart}) {

  return (

    <div className='product'>
        <h1>{product.title}</h1>
        <img className='product-image' src={product.image} alt="" />
        <p>{product.price}</p>
        <p>{product.description}</p> 
        <button onClick={handleAddToCart}>Add to cart</button>
    </div>
  )
}
