import React,{useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'; // Import the shopping cart icon
import './nav.css';
import { Link, animationscroll as scroll} from 'react-scroll';
import Menu from './Menu.jsx';
import Home from './Home.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Acart from './Addcart.jsx';
// import Addcart from './Addcart.jsx'
export default function Navbar() {
  const [cartCount, setCartCount] = useState(0);

  // Function to handle cart update
  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
  };

 
  return (
    
    <>
    <div className='header'>
      <li>
        <img src="/nav.png" alt="image" className='i'/>
      </li>
      <li>
        <img src="/nav2.png" alt="image" className='i2'/>
      </li>
      <div className='divs'>
        <li><Link to='home' smooth={true} duration={500}>Home</Link></li>
        <li><Link to='menu' smooth={true} duration={500}>Menu</Link></li>
        <li><Link to='blog' smooth={true} duration={500}>Blog</Link></li>
        <li><Link to='about' smooth={true} duration={500}>About </Link></li>
        <li><a href='#html'>Contact</a></li>
        <li>
          <Acart/>
        </li>
<li>
  <Link to='Login' smooth={true} duration={500}>
    <button className='b1'>Log in</button>
  </Link>
</li>
        
      </div>
    </div>
    <Home></Home>
    <Menu  />
    
   
    </>
  );
}