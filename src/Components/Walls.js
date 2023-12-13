import React from 'react';
import TopNav from './TopNav';
import FlexGallery from './FlexGallery';
import ArtNav from './ArtNav';
import Footer from './Footer';
import { wall } from '../Media';
import comeBackLater from '../Media/Walls/come-back-later.png'
 
const Walls = () => {
  return (
    <>
      <div className='work-container'>
        <TopNav />
        <h3 className='work-title'>SELECTED PROJECTS</h3> 
        { wall.length === 0 ? (<div className='work-img-container'>
          <img className='come-back-later' src={comeBackLater} alt='Two older ladies spray painting the words "come back later"'/>
        </div>) : <FlexGallery art={wall}/>}
        <Footer />
      </div>
      <ArtNav />
    </>
  )
}

export default Walls