import React from 'react'
import './header.css'
import logo from '../images/Logo.svg'

const Header = () => {
  return (
    <nav className='header'>
        {/* <img src={logo} alt="" /> */}
        <h2 className='header-title'>Job Hunter</h2>
        <div className='h_link'>
        <a href='/'>Home</a>
        <a href='/Statistics'>Statistics</a>
        <a href='/inventory'>Applied Jobs</a>
        <a href='/Blog'>Blog</a>
        </div>
        <button className='header-btn'>Start Applying</button>
        
    </nav>
  )
}

export default Header