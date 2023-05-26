import { useState } from 'react'
import "./Navbar.css"

const Navbar = () => {

  const [isActive, setIsActive] =useState(false);

  return (
    <>
      <nav>
        <a href='#' className='logo'>
          Jhonny<span className='red-letter'>Calvo</span>
        </a>
        <ul>
          <li>
            <a href='#'>About</a>
          </li>
          <li>
            <a href='#'>Experience</a>
          </li>
          <li>
            <a href='#'>Contact</a>
          </li>
        </ul>

        <div onClick={() => setIsActive(true)} className='menu-icon'>
          <img src='' alt="" />
        </div>
      </nav>

      <div className={`mobile-menu-container ${isActive ? "active" : ""}`}>
        <div onClick={() => setIsActive(false)} className='close-icon' alt="">
          <img src='' alt='' />
        </div>
        <ul className='menu-items'>
          <li>
            <a href='#' onClick={() => setIsActive(false)} >About</a>
          </li>
          <li>
            <a href='#' onClick={() => setIsActive(false)} >Experience</a>
          </li>
          <li>
            <a href='#' onClick={() => setIsActive(false)} >Contact</a>
          </li>
        </ul>

      </div>
    </>

  )
}

export default Navbar
