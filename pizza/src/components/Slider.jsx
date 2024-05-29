import React, { useState } from 'react';
import Item from './item .json'
import './silder.css';
function Slider({handleAddToCart}) {
  const[ Record,SetRecord]= useState(Item)
 
  return (
    <div>
      
      <div className='slider'>
        {/* <div className='container1'>
          <img className="pizza1" src='' alt="Pizza Image 3" />
          <h1 className='title'>
            Soya , capsicum pizza
          </h1>
          <p>Pizza dough, pizza sauce, provolone cheese, mozzarella.</p>
          <p className='price'>$9.00</p>
          <button className='b7' >Add to Cart</button>
        </div> */}
       
        {Record.map((item)=> (
             <div className='container1' key={item.no}>
               <img className="pizza1" src={item.img} alt="Pizza Image 3" />
              <h1 className='title'>{item.Type}</h1>
              <p>{item.topping}</p>
              <p className='price'>{item.price}</p>
              <button className='b7'onClick={()=>{handleAddToCart()}} >Add to Cart</button>
              </div>
      ))}
        </div>
    </div>
  )
}

export default Slider
