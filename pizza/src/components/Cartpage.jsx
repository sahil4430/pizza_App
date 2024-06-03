import React from 'react';
import './Cartpage.css';

const Cartpage = () => {
  return (
    <div className="container">
      <div className="cart-container">
        <div className="cart-item card">
          <li>
          <img src="path/to/your/image.png" alt="Denim Shirt" />
          <div className="card-body">
            <h2 className="product-title">Denim Shirt</h2>
            <p className="product-price">$17.99</p>
            <div>
              
              <label htmlFor="quantity">Quantity</label>
              <input type="number" id="quantity" name="quantity" className="quantity-input" defaultValue="1" />
            </div>
            <button className="btn">Add to Cart</button>
          </div>
          </li>
          <li>
          <img src="path/to/your/image.png" alt="Denim Shirt" />
          <div className="card-body">
            <h2 className="product-title">Denim Shirt</h2>
            <p className="product-price">$17.99</p>
            <div>
              
              <label htmlFor="quantity">Quantity</label>
              <input type="number" id="quantity" name="quantity" className="quantity-input" defaultValue="1" />
            </div>
            <button className="btn">Add to Cart</button>
          </div>
          </li>
          
        </div>
        <div className="cart-summary card">
          <h5>Summary</h5>
          <p>Products: $17.99</p>
          <p>Shipping: $2.99</p>
          <p>Total (including VAT): $20.98</p>
          <button className="btn">Go to Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cartpage;
