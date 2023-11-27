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
          <p>{'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lobortis porttitor maximus. Maecenas et mi eleifend odio tincidunt euismod. Curabitur convallis nunc sodales gravida faucibus. Nullam a efficitur velit. Phasellus vel ullamcorper felis, dictum condimentum tortor. In eu bibendum odio. Ut aliquet urna libero, non consectetur odio euismod ac. Vestibulum rhoncus ac ipsum id commodo. In tincidunt tortor nisi, at ultrices neque laoreet ut. Duis sit amet consequat diam, vel cursus dolor. In hac habitasse platea dictumst. Nulla gravida nisl eget augue aliquet, in feugiat mi rhoncus. Nulla luctus erat sit amet dui sollicitudin pretium. Vestibulum gravida lacus eu est congue tincidunt. Aliquam erat volutpat. Aliquam arcu neque, porta et finibus a, gravida quis felis. \n Nunc ultricies a arcu ut luctus. Donec sit amet dignissim nibh. Aliquam sit amet placerat ante. Duis blandit lacus mauris, ut blandit nulla gravida sed. Maecenas in ligula lobortis, egestas elit ac, venenatis nibh. Nam placerat fringilla nisl, in malesuada diam consequat ut. Mauris dictum lobortis efficitur. Vestibulum ac ante eget lacus luctus porttitor. Morbi neque ipsum, suscipit aliquet risus a, malesuada dictum metus. Vivamus vulputate dui eget sem consectetur placerat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam ullamcorper ante in eleifend venenatis. \n Phasellus et pellentesque eros. Proin placerat hendrerit ipsum eget facilisis. Nullam vel turpis fringilla, ultrices ligula ac, dapibus diam. Aliquam eleifend pulvinar neque, vel lobortis nisi. Quisque dapibus, ligula vel scelerisque feugiat, arcu magna laoreet mauris, eu auctor libero libero at quam. Quisque a erat non odio ullamcorper dictum. Aliquam facilisis hendrerit dictum. Fusce tempor odio in volutpat feugiat. Vestibulum a turpis placerat tellus mollis rhoncus. Suspendisse sollicitudin est ut bibendum gravida. Donec euismod elit ex, faucibus consequat velit aliquam nec. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus vitae blandit ante, ut vestibulum sem. Donec massa arcu, ultricies a viverra eu, pellentesque a odio.'}</p>
      </div>
      <Footer />
    </div>
  )
}

export default Story