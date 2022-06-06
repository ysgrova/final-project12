import React from 'react';
import logo from './food-shop-logo.jpg';
import './styles.css';

const Logo = () => (
  <div className='header-content_logo'>
    <div>
      <img src={logo} alt='logo' />
    </div>
  </div>
);

export default Logo;
