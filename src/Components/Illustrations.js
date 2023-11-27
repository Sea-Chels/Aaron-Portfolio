import React from 'react';
import TopNav from './TopNav';
import FlexGallery from './FlexGallery';
import Footer from './Footer';
import ArtNav from './ArtNav';
import { illustration } from '../Media';

const Illustrations = () => {
  return (
    <>
      <div className='work-container'>
        <TopNav />
        <h3 className='work-title'>ILLUSTRATIONS</h3>
        <FlexGallery art={illustration}/>
        <Footer />
      </div>
      <ArtNav />
    </>
  )
}

export default Illustrations