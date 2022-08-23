import React from 'react'
import './style.css'
import Navbar from '../NavBar/Navbar'
import SubHeader from '../SubHeader/SubHeader'
function Header({children}) {
  return (
    <div id="header-conatiner">
        {/* <Navbar /> */}
        <div className="overlay">
        
        
        </div>
        {children}
        {/* <div>
          <SubHeader title="Find work that you love with compaines you can trust." description=";lmxjkbhevgded"/>
        </div> */}
    </div>

  )
}

export default Header