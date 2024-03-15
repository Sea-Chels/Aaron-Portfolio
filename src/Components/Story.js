import React from 'react';
import TopNav from './TopNav';
import Footer from './Footer';
import './css/story.css';

const Story = () => {
  return (
    <div className='story-container'>
      <TopNav />
      <div className='story-hero'>
        <h1 id='story-title'>— STORY —</h1>
      </div>
      <div className='story-content'>
          <h1>Streets Meet Design</h1>
          <p className='divider'>____</p>
          <p>{"Hailing from the vibrant streets of Baltimore, Spud MD is a dynamic force in the world of street art, seamlessly blending the raw energy of urban landscapes with a polished touch of graphic design finesse. Born and raised in the heart of Baltimore, he found inspiration in the city's rich history, eclectic culture, and the ever-changing rhythm of its streets."}</p> <p>{"Beyond the streets, Spud has made a mark in the professional realm, wielding graphic design and marketing expertise to elevate brands and campaigns. With a portfolio that seamlessly combines the rebellious spirit of street art with the precision of marketing strategy, he have left an indelible mark on the visual identity of numerous projects"}</p> <h2>{"Community Engagement:"}</h2> <p>{"Committed to community engagement, Spud MD actively collaborates with local businesses, community organizations, and fellow artists to create a visual dialogue that reflects the spirit of Baltimore. He believe in the power of art to unite, inspire, and ignite change, using his skills to contribute to the cultural tapestry of the city."}</p> <h2>{"Connect with Spud MD:"}</h2> <p>{"Explore the dynamic world of Spud MD on his website the works page, and follow the artistic journey on social media @spudmd. For inquiries, collaborations, or to bring a splash of urban artistry to your brand, he can be reached using any of the links on the contact page."}</p> <p>{"In the spirit of Baltimores boundless creativity, Spud MD continues to leave an indelible mark on the cityscape, proving that art knows no bounds."}</p>
      </div>
      <Footer />
    </div>
  )
}

export default Story