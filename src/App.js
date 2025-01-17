// import useState
import React, { useState } from 'react';
import './styles.css';
import AllTheThings from './components/AllTheThings';
import MyShoppingCart from './components/MyShoppingCart';
import Form from './components/Form';
import productsArr from './products';

export default function App() {
  const [products, setProducts] = useState(productsArr);  
  const [cart, setCart] = useState([]);


const addToCart = (product) => {
  return(
    setCart([...cart, product])
  )
}

const removeFromCart = (index) => {
  return(
    setCart(cart.filter((product, i) => i !== index))
  )
}

  return (
    <div className="App">
      <h1>Big Time Shopping</h1>
      <Form />
      <div className="products">
        <AllTheThings 
          products = {products}
          addToCart = {addToCart}
        />
        <MyShoppingCart 
          cart = {cart}
          removeFromCart = {removeFromCart}
        />
      </div>
    </div>
  );
}
