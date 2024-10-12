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
          <p>{"Hailing from the vibrant streets of Seattle, Spud MD is a dynamic force in both street art and graphic design, effortlessly blending the raw energy of urban landscapes with the technical precision and creative finesse required for large-scale projects. Born and raised in the heart of the city, he draws inspiration from Baltimore's rich history, eclectic culture, and the ever-changing rhythm of its streets."}</p> 
          <p>{"As the CEO and Lead Designer of a freelance design studio, Spud has led diverse creative projects ranging from custom murals to branding and visual storytelling for clients across various industries. His portfolio is a seamless fusion of the rebellious spirit of street art with the meticulous detail of professional graphic design. He excels in delivering creative solutions that transform spaces and elevate brands, whether through striking murals or carefully crafted marketing visuals."}</p> 
          <p>{"Beyond his freelance work, Spud serves as the Head Graphic Designer at his current company, where he manages the entire graphic design department across two locations. He is responsible for everything from large-scale glass installations to the oversight of complex printing processes, ensuring each project is executed with technical accuracy and creative vision. His background as a Field Engineer, where he mastered CAD and 3D modeling, has given him a strong foundation in precision and technical design, skills that now enhance his work in both mural installations and custom glass design."}</p> 
          <p>{"Spud's unique ability to blend artistic creativity with technical expertise allows him to tackle complex projects that span disciplines, including graphic design, branding, and environmental art. He is passionate about pushing creative boundaries while maintaining a strong focus on problem-solving and project management."}</p> 

          <h2>{"Community Engagement:"}</h2> 
          <p>{"Committed to community engagement, Spud MD actively collaborates with local businesses, community organizations, and fellow artists to create visual dialogues that reflect the spirit of Seattle. He believes in the power of art to unite, inspire, and ignite change, using his unique blend of design expertise and street art to contribute to the city's cultural tapestry. Whether it's a mural that transforms a neighborhood or a brand identity that captures the soul of a business, Spud's work is always deeply rooted in community values and artistic integrity."}</p> 

          <h2>{"Connect with Spud MD:"}</h2> 
          <p>{"Explore the dynamic world of Spud MD through his works page, and follow his artistic journey on social media @spudmd. For inquiries, collaborations, or to bring a splash of urban artistry and design expertise to your brand, you can reach out via the contact page."}</p> 
          <p>{"In the spirit of Seattle's boundless creativity, Spud MD continues to leave an indelible mark wherever he goes, proving that art and design know no bounds—whether on the streets, in corporate spaces, or through large-scale installations."}</p>

      </div>
      <Footer />
    </div>
  )
}

export default Story