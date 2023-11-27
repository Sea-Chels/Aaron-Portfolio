import React from 'react'
import './css/nav.css'
import logo from '../Media/Artboard 1.png'

const TopNav = ({ showLogo }) => {
  return (
    <div className='full-topbar'>
        <a href='/'>
            <img src={logo} alt="spud md hand written, with a drawn ghost" />
        </a>
        <div className='TopNav'>
            <a className='top-nav-item' href='/works' >Works</a>
            <a className='top-nav-item' href='/story'>Story</a>
            <a className='top-nav-item' href='/contact'>Contact</a>
            <a className='top-nav-item' href='/shop'>Shop</a>
        </div>
    </div>
  )
}

export default TopNav