import React from 'react';
import TopNav from './TopNav';
import { InstagramOutlined, MailOutlined, LinkedinOutlined, BehanceSquareOutlined, TwitterOutlined } from '@ant-design/icons';
import './css/contact.css';

const Contact = () => {
  return (
    <div className='contact'>
      <TopNav /> 
      <div className='contact-content'>
        <h1 className='contact-title'>
          - CONTACT ME -
        </h1>
        <p>
        {'Connect with me on social media! I am open for Graphic Design, Mural, and Painting commissions!'}
        </p>
      </div>
      <div className='icon-container'>
        <a className='icons' href='https://www.instagram.com' target="_blank" rel="noreferrer"><InstagramOutlined /></a>
        <a className='icons' href='https://www.linkedin.com'><LinkedinOutlined /></a>
        <a className='icons' href='https://www.behance.com' target="_blank" rel="noreferrer"><BehanceSquareOutlined /></a>
        <a className='icons' href='https://www.twitter.com' target="_blank" rel="noreferrer"><TwitterOutlined /></a>
        <a className='icons' href='mailto:ink.aaron@gmail.com' target="_blank" rel="noreferrer"><MailOutlined /></a>
      </div>
    </div>
  )
}

export default Contact

