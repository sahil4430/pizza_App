import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import'./Addcart.css'
const Addcart=({ cartCount, handleAddToCart })=>{
    const[navwidth,Setwidth]=useState("0");
    const openNav=()=>{
        Setwidth("250px")
    }
    const closeNav = () => {
        Setwidth("0");
      };
  return (
    <div> 
  <div id="mySidenav" className="sidenav" style={{ width: navwidth }}>
        <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Clients</a>
        <a href="#">Contact</a>
      </div>
      <button className='b2'onClick={openNav} >
            <i className="fas fa-shopping-cart" ></i>
            <FontAwesomeIcon icon={faShoppingCart} />  {cartCount}
          </button>
    </div>
  )
}

export default Addcart
