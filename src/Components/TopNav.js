import React from 'react';
import { Link } from 'react-router-dom'; 
import './css/nav.css';
import logo from '../Media/Artboard 1.png';

const TopNav = ({ showLogo }) => {
  return (
    <div className='full-topbar'>
      <Link to="/">
        <img src={logo} alt="spud md hand written, with a drawn ghost" />
      </Link>
      <div className='TopNav'>
        <Link className='top-nav-item' to="/">Home</Link>
        <Link className='top-nav-item' to="/works">Works</Link>
        <Link className='top-nav-item' to="/story">Story</Link>
        <Link className='top-nav-item' to="/contact">Contact</Link>
        {/* <Link className='top-nav-item' to="/shop">Shop</Link> */}
      </div>
    </div>
  );
}

export default TopNav;
