import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header className='header'>
      <h3><Link to="/">H K DAVE.</Link></h3>
      <nav className='menuItems'>
        <ul className='navList'>
          <Link className='navList-item' to="/#">Project</Link>
          <Link className='navList-item' to="/#">Skills</Link>
          <Link className='navList-item' to="/#">Contact</Link>
        </ul>
      </nav>
    </header>
  )
}