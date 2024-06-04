import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import'./Addcart.css'
import Cartpage from './Cartpage';
const Acart=()=>{
    const[navwidth,Setwidth]=useState("0");
    const openNav=()=>{
        Setwidth("1050px")
    }
    const closeNav = () => {
        Setwidth("0");
      };
  return (
    <div> 
  <div id="mySidenav" className="sidenav" style={{ width: navwidth }}>
        <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
       <Cartpage/>
      </div>
      <button className='b2'onClick={openNav} >
            <i className="fas fa-shopping-cart" ></i>
            <FontAwesomeIcon icon={faShoppingCart} />  
          </button>
    </div>
  )
}

export default Acart;
