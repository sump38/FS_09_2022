import React, { useEffect, useState } from 'react';
import './App.css';
import Products from './Products';
function App() {
  const [category, setCategory] = useState("All");
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  console.log("app component render");
  useEffect(() => {
      console.log('call effect');
      fetch('https://fakestoreapi.com/products')
              .then(res=>res.json())
              .then(data=>setProducts(data))
}, []);
  const handleAddToCart = (product) => { 
    const productExist = cart.find(pd => pd.id === product.id);//  אם יש זה - מוצא את המוצר שכבר קיים בסל
    if (!productExist) {
    product.quantity = 1;
    const newCart = [...cart, product];
    setCart(newCart);
    console.log(newCart);

    } else {
      product.quantity++;
      const newCart = [...cart]
      // cart.map(
      //   pd => pd.id === product.id ? {...pd, quantity: pd.quantity + 1} : {...pd}
      //   );
      setCart(newCart);
      console.log(newCart);

    }
    
  }
  return (
    <div className="App">
    <div>
    
    <select  id = "category" onChange={(e)=>setCategory(e.target.value)}>
    <option value="category 1">first</option>
    <option value="category 2">secund</option>
    <p>Selected value: {category}</p>
    </select>
    </div>
<div>
{cart.map(pd=><li>{pd.title} {pd.quantity}</li>)}
</div>

    <Products products={products} handleAddToCart={handleAddToCart} />
    <div>{products.length===0?"loading...":null}</div>
    </div>
  );
}
export default App;