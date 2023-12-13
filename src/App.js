import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './Components/Home';
import ArtNav from './Components/ArtNav';
import Story from './Components/Story';
import Contact from './Components/Contact';
import Shop from './Components/Shop';
import NoPage from './Components/NoPage';
import Illustrations from "./Components/Illustrations";
import Walls from "./Components/Walls";
import Canvases from "./Components/Canvases";

function App() {

  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/works" element={<ArtNav />} />
          <Route path="/works/wall" element={<Walls />} />
          <Route path="/works/illustration" element={<Illustrations  />} />
          <Route path="/works/canvas" element={<Canvases />} />
        <Route path="/story" element={<Story />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="*" element={<NoPage />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
