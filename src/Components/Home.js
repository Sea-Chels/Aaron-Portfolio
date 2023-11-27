import React from 'react';
import TopNav from './TopNav';
import './css/home.css'

const Home = () => {
  return (
    <div>
        <TopNav />
        <div id='home-container'>
          <a href='/story' id='home-text'><p>SPUD MD</p></a>
        </div>
    </div>
  )
}

export default Home