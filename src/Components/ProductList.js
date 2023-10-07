import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ProductList(props ) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch the list of products from your API
    axios.get('/product/list')
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, []);

  return (
    <div>
      {/* <h2>Product List</h2> */}
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <img src={product.imageUrl} alt={product.productName} />
            <h3>{product.productName}</h3>
            <p>{product.content}</p>
            <p>{product.actualPrice}</p>
            <p>Price: ${product.price}</p>
            <button onClick={() => props.addToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
