import React, { useEffect } from 'react';
import TopNav from './TopNav';
import './css/nav.css';

const basicBackgroundObject = {
  walls: {
    selected: false,
    class: 'wall-hover'
  },
  illustration: {
    selected: false,
    class: 'illustration-hover'
  },
  canvas: {
    selected: false,
    class: 'canvas-hover'
  }
}
const ArtNav = () => {
  const [b, setB] = React.useState(basicBackgroundObject);
  const [classList, setClassList] = React.useState('');
  const changeBackgroundImg = s => { 
        const newBackgroundObject = b;
        for (const [key, value] of Object.entries(newBackgroundObject)) {
          if(key === s){
          value.selected = true;
          } else {
            value.selected = false;
          }
        }
          if(s === 'main'){
            setClassList('');
          }
          return setB({...newBackgroundObject});
      };

    useEffect(()=> {
      for (const item of Object.entries(b)) {
        const [, itemData] = item
        console.log('useEffect forloop 1:', itemData)
        if(itemData.selected) {
          setClassList(itemData.class);
          console.log('useEffect forloop 2:', itemData.class)
        }
      };
    }, [b])

  return (
    <div className={`art-nav-container ${classList}`}>
        <TopNav />
        <div className='art-nav'>
            <a onMouseOver={() => changeBackgroundImg('walls')}  onMouseOut={() => changeBackgroundImg('main')} className='art-nav-item' href='/works/wall' >Walls</a>
            <a onMouseOver={() => changeBackgroundImg('illustration')} onMouseOut={() => changeBackgroundImg('main')}className='art-nav-item' href='/works/illustration'>Illustrations</a>
            <a onMouseOver={() => changeBackgroundImg('canvas')} onMouseOut={() => changeBackgroundImg('main')}className='art-nav-item' href='/works/canvas'>Canvases</a>
      </div>
    </div>
  )
}

export default ArtNav