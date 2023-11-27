import React from 'react';
import TopNav from './TopNav';
import Footer from './Footer';
import FlexGallery from './FlexGallery'
import ArtNav from './ArtNav';
import { canvas } from '../Media/'

const Canvases = () => {
  return (
    <>
      <div className='work-container'>
        <TopNav />
        <h3 className='work-title'>CANVAS</h3>
        <FlexGallery art={canvas}/>
        <Footer />
    </div>
    <ArtNav />
    </>
  )
}

export default Canvases