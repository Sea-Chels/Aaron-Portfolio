import React from 'react';
import TopNav from './TopNav';
import './css/home.css'

const Home = () => {
  const { useState } = React;
  const [background, setBackground] = useState('');
  return (
    <div className={`home-main-container ${background}`}>
        <TopNav />
        <div id='home-container'>
          <a href='/story' id={`home-text`} onMouseOver={() => setBackground('home-text-hover')}  onMouseOut={() => setBackground('')}><p>SPUD MD</p></a>
        </div>
    </div>
  )
}

export default Home