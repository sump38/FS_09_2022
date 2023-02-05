import React from 'react'

export default function Cart({cart,removeFromCart}) {
    console.log("removeFromCart 4",removeFromCart);
  return (
    <div>Cart
    {cart.map(item => <div>{item.title} - {item.quantity} <button onClick={()=>removeFromCart(item)}>remove</button></div>)}
    
    </div>
  )
}
