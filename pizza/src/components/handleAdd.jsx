import React, { useState } from 'react';
import Addcart from './Addcart';
import Slider from './Slider';

const handleAdd = () => {
  const [cartCount, setCartCount] = useState(0);

  // Function to handle cart update
  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
  };
  return ( 
    <>
    <Addcart cartCount={cartCount} handleAddToCart={handleAddToCart} />
    <Slider handleAddToCart={handleAddToCart} />
    </>
  )
}

;

export default handleAdd;
