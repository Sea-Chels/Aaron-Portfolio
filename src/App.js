import React, { useState, useEffect } from 'react';
import './App.css';
import Home from './Components/Home';
import ArtNav from './Components/ArtNav';
import Story from './Components/Story';
import Contact from './Components/Contact';
import Shop from './Components/Shop';
import NoPage from './Components/NoPage';
import Illustrations from './Components/Illustrations';
import Walls from './Components/Walls';
import Canvases from './Components/Canvases';

function App() {
  const [currentRoute, setCurrentRoute] = useState(window.location.pathname);

  useEffect(() => {
    const handleRouteChange = () => {
      setCurrentRoute(window.location.pathname);
    };

    window.addEventListener('popstate', handleRouteChange);

    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  const renderRoute = () => {
    switch (currentRoute) {
      case '/':
        return <Home />;
      case '/works':
        return <ArtNav />;
      case '/works/wall':
        return <Walls />;
      case '/works/illustration':
        return <Illustrations />;
      case '/works/canvas':
        return <Canvases />;
      case '/story':
        return <Story />;
      case '/contact':
        return <Contact />;
      case '/shop':
        return <Shop />;
      default:
        return <NoPage />;
    }
  };

  return <div>{renderRoute()}</div>;
}

export default App;
