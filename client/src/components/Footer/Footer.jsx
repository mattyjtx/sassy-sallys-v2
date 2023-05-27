import React from 'react';
import "./Footer.scss";

const Footer = () => {
  return (
    <div className='footer'>
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
          Sassy Sally’s Boutique is an all around boutique. Catering to various price points available to any budget shoppers.  I want all types of women to feel comfortable and confident when shopping for their classy, polished or casual looks. 
          </span>
        </div>
        <div className="item">
        <h1>Contact</h1>
          <span>
          3001 W. Loop 250 N.  C109, Midland, TX, United States, 79705
          </span>
          <span>(432) 695-6057</span>
          <span>sassysallysboutiquellc@gmail.com</span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className='logo'>Sassy Sally's</span>
          <span className='copyright'>© Copyright 2023. All Rights Reserved</span>
        </div>
        <div className="right">
          <img src='/img/payment.png' alt=''></img>
        </div>
      </div>
    </div>
  )
}

export default Footer