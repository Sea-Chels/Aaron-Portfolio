import React from 'react';
import TopNav from './TopNav';
import FlexGallery from './FlexGallery';
import ArtNav from './ArtNav';
import Footer from './Footer';
import { wall } from '../Media';
 
const Walls = () => {
  return (
    <>
      <div className='work-container'>
        <TopNav />
        <h3 className='work-title'>SELECTED PROJECTS</h3>  
        <FlexGallery art={wall}/>
        <Footer />
      </div>
      <ArtNav />
    </>
  )
}

export default Walls