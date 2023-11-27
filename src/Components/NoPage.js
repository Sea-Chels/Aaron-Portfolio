import React from 'react'
import error from '../Media/error-pg.gif' 

const NoPage = () => {
  return (
    <div className='error-pg'>
        <img src={error} alt='error 404 depiction' />
        <p>Sorry, the page you requested does not exist.</p>
        <a href='/'>Return to home</a>
    </div>
  )
}

export default NoPage