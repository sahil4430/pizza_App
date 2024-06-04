import React ,{useState} from 'react';
import './menu.css';
import './footer.css';
import Login from './Login';
import Slider from './Slider';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function Menu() {
  
  return (
   
    <>
    <section id='menu'>
      <div className='container'>
        <h2 className='bold'>Welcome to <i className='it'>Pizza Time</i> restaurant </h2>
        <div className='con'>
          <img className='img1' src='.\pizza2.png' alt="Pizza Image 1" />
          <p className='p1'>Founded in 1982, we bring pizza slice by slice to the next level! Unique branding and being in
            the pizza industry is the formula for our success. We understand what people want and convert desires into unique
            taste experiences. Freshness, originality, and quality are only small parts of our priorities.
            Affordable costs, located almost anywhere you go, an amazing online operational system to order food in one click.
            Easy-to-navigate pre-order options, and amazing options for corporate parties!
            At Pizza Time, we care about you because you are the one who makes us special!</p>
          <img className='img1' src=".\pizza1.png" alt="Pizza Image 2" />
        </div>
        <img className="img5" src='.\section.png' alt="Section Image" />
      </div>
     
      <div className='row'>
      <div className='container0'>
          <img className="pizza2" src='.\Pizza O Clock Funny Pizza Slogan Design Sticker_prev_ui.png' alt="Pizza Image 3" />
          <h2>Order Now</h2>
          
        </div>
      <div className='slider'>
        {/* <div className='container1'>
          <img className="pizza1" src='.\download (1).jpg' alt="Pizza Image 3" />
          <h1 className='title'>
            Soya , capsicum pizza
          </h1>
          <p>Pizza dough, pizza sauce, provolone cheese, mozzarella.</p>
          <p className='price'>$9.00</p>
          <button className='b7' onClick={handleAddToCart}>Add to Cart</button>
        </div>
        <div className='container1'>
          <img className="pizza1" src='.\Get the We Heart It app!.jpg' alt="Pizza Image 3" />
          <h1 className='title'>
            Panner makhni pizza
          </h1>
          <p>Pizza dough, pizza sauce, provolone cheese, mozzarella.</p>
          <p className='price'>$10.00</p>
          <button className='b7'onClick={handleAddToCart} >Add to Cart</button>
        </div>
        <div className='container1'>
          <img className="pizza1" src='.\download (2).jpg' alt="Pizza Image 3" />
          <h1 className='title'>
            Pasta pizza
          </h1>
          <p> pizza sauce, provolone cheese, mozzarella.</p>
          <p className='price'>$8.00</p>
          <button className='b7' onClick={handleAddToCart}>Add to Cart</button>
        </div>
        <div className='container1'>
          <img className="pizza1" src='.\11 Best Vegan Pizza Recipes.jpg' alt="Pizza Image 3" />
          <h1 className='title'>
            Vegge twist
          </h1>
          <p>Pizza dough, pizza sauce, provolone cheese, mozzarella.</p>
          <p className='price'>$16.00</p>
          <button className='b7' onClick={handleAddToCart}>Add to Cart</button>
        </div>

      <div className='container1'>
          <img className="pizza1" src='.\Bacon, mushroom and crispy onion pizza.jpg' alt="Pizza Image 3" />
          <h1 className='title'>
            Bacon , mushroom,and crispy
          </h1>
          <p>Pizza dough, pizza sauce, provolone cheese, mozzarella.</p>
          <p className='price'>$11.00</p>
          <button className='b7' onClick={handleAddToCart}>Add to Cart</button>
        </div>
        
        <div className='container1'>
          <img className="pizza1" src='.\Khachapuri Хачапури грузинская выпечка pastry.jpg' alt="Pizza Image 3" />
          <h1 className='title'>
           Cheesey pizza
          </h1>
          <p>Pizza dough, pizza sauce, provolone cheese, mozzarella.</p>
          <p className='price'>$11.00</p>
          <button className='b7' onClick={handleAddToCart}>Add to Cart</button>
        </div>

        <div className='container2'>
          <img className="pizza1" src='.\What Is New York-Style Pizza_ Learn About This Famous Pizza Style.jpg' alt="Pizza Image 3" />
          <h1 className='title'>
            French pizza
          </h1>
          <p>Pizza dough, pizza sauce, provolone cheese, mozzarella with fries</p>
          <p className='price'>$11.00</p>
          <button className='b7' onClick={handleAddToCart}>Add to Cart</button>
         
        </div> */}
        <Slider/>
      </div>
      
      </div>
      </section>
      <section id='blog'>
      <div className='container3'>
          <h1 className='h10'>Recent Blog</h1>
          <div className='grip'>
            <div className='c'>
                 <img  className="i1"src='.\What Is New York-Style Pizza_ Learn About This Famous Pizza Style.jpg'>
                 

                 </img>
                 <h3 className='h8'>27 june 2023</h3>
                 <p className='p3'> Embark on a culinary adventure as we explore these delectable pizza crusts, each contributing its own character to the beloved dish we all know and lov</p>

            </div>
            <div className='c'>
                 <img  className="i1"src='.\Bacon, mushroom and crispy onion pizza.jpg'>


                 </img>
                 <h3 className='h8'>22 april 2023</h3>
                 <p className='p3'>When it comes to pizza, the crust is more than just a vessel for toppings – it's a canvas that can influence the entire dining experience</p>

            </div>
            <div className='c'>
                 <img  className="i1"src='.\11 Best Vegan Pizza Recipes.jpg'>

                 </img>
                 <h3 className='h8'>20 may 2023</h3>
                 <p className='p3'>Discover the art of repurposing leftover pizza dough with our inventive ideas. From savory bites to sweet delights, your leftover dough has never been this exciting</p>

            </div>
         

          </div>
          <button className='b0'>More Post</button>
          </div>
          </section>
          <section id='about'>
          <div className='contact'>
  <video width="640" height="360" controls autoPlay loop muted>
    <source src=".\WhatsApp Video 2024-01-14 at 3.47.40 PM.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  <div className='para'>
    <p className='p7'>
      <h3>Contact Us</h3>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis saepe possimus molestias odit,
      ullam perspiciatis esse temporibus architecto reprehenderit laboriosam tempore aspernatur eveniet
       cum tempora placeat, totam at molestiae ad.
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis saepe possimus molestias odit,
      ullam perspiciatis esse temporibus architecto reprehenderit laboriosam tempore aspernatur eveniet
       cum tempora placeat, totam at molestiae ad.
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis saepe possimus molestias odit,
      ullam perspiciatis esse temporibus architecto reprehenderit laboriosam tempore aspernatur eveniet
       cum tempora placeat, totam at molestiae ad.
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis saepe possimus molestias odit,
      ullam perspiciatis esse temporibus architecto reprehenderit laboriosam tempore aspernatur eveniet
       cum tempora placeat, totam at molestiae ad.
    </p>
  </div>
</div>
<br></br>
<br></br>
<br></br>
<Login></Login>

    </section>
   <br></br>
   <br></br>
   <section id='foot'>
   <footer className='footer'>
      <div className='footer-container'>
        <div className='footer-section'>
          <h4>About Us</h4>
          <p>We are a leading e-commerce platform providing a wide range of products to cater to your needs.</p>
        </div>
        <div className='footer-section'>
          <h4>Contact Us</h4>
          <p>Email: support@yourcompany.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
        <div className='footer-section'>
          <h4>Follow Us</h4>
          <div className='social-icons'>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            {/* <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a> */}
          </div>
        </div>
      </div>
      <p>&copy; 2024 Your Company Name. All rights reserved.</p>
    </footer>
   </section>
      
    </>
  );
}