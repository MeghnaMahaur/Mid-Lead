// import React, { useState } from 'react';
import React from 'react';
import "./Cart.css";

function Cart({cart, netTotal, discountTotal, subTotal}) {
  // const [cart, setCart] = useState([]);

//   Add product to the cart
  // const addToCart = (product) => {
  //   setCart([...cart, product]);
  // };

  // Calculate the total price of items in the cart
  const calculateTotal = () => {
    return cart.reduce((total, product) => total + product.price, 0);
  };

  return (
    <div className='cart-container'>
      
        {cart.map((product) => (
          <li key={product.id}>
            {product.productName} - ${product.price}
          </li>
        ))}
    
      <ul>
        <li>Net Total : ${netTotal}</li>
        <li>Discount Total : ${discountTotal}</li>
        <li>Sub Total :  ${subTotal}</li>
      </ul>
      <p>Total: ${calculateTotal()}</p>
    </div>
  );
}

export default Cart;
