import React from 'react'
import "./Product.css"

export default function Product({product,addToCart}) {
  return (
    <div className='product'>{product.title}
    <img className= "product-image" src={product.image} alt=""/>
    <p>{product.price}</p>
    <p>{product.description}</p>
    <button onClick={addToCart}>Add to cart</button>
    
    
    </div>  )
}
