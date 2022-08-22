import React from 'react'
import './style.css'
import Navbar from '../NavBar/Navbar'
function Header({className}) {
  return (
    <div id="header-conatiner" className={className}>
        <div className="overlay">
        <Navbar />
        </div>
       
    </div>

  )
}

export default Header