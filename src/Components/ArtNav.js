import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
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

  const changeBackgroundImg = (s) => { 
    const newBackgroundObject = { ...b };
    for (const key in newBackgroundObject) {
      if (key === s) {
        newBackgroundObject[key].selected = true;
      } else {
        newBackgroundObject[key].selected = false;
      }
    }
    if (s === 'main') {
      setClassList('');
    }
    setB(newBackgroundObject);
  };

  useEffect(() => {
    for (const item of Object.values(b)) {
      if (item.selected) {
        setClassList(item.class);
        break;
      }
    }
  }, [b]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className={`art-nav-container ${classList}`}>
      <TopNav />
      <div className='art-nav'>
        <Link
          to='/works/wall'
          onClick={scrollToTop}
          onMouseOver={() => changeBackgroundImg('walls')}
          onMouseOut={() => changeBackgroundImg('main')}
          className='art-nav-item'
        >
          Walls
        </Link>
        <Link
          to='/works/illustration'
          onClick={scrollToTop}
          onMouseOver={() => changeBackgroundImg('illustration')}
          onMouseOut={() => changeBackgroundImg('main')}
          className='art-nav-item'
        >
          Illustrations
        </Link>
        <Link
          to='/works/canvas'
          onClick={scrollToTop}
          onMouseOver={() => changeBackgroundImg('canvas')}
          onMouseOut={() => changeBackgroundImg('main')}
          className='art-nav-item'
        >
          Canvases
        </Link>
      </div>
    </div>
  );
}

export default ArtNav;
