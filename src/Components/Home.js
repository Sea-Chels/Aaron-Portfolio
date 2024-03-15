import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import TopNav from './TopNav';
import './css/home.css'

const Home = () => {
  const { useState } = React;
  const [background, setBackground] = useState('');
  return (
    <div className={`home-main-container ${background}`}>
        <TopNav />
        <div id='home-container'>
          <Link to="/story" id={`home-text`} onMouseOver={() => setBackground('home-text-hover')}  onMouseOut={() => setBackground('')}><p>SPUD MD</p></Link>
        </div>
    </div>
  )
}

export default Home;
