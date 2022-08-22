import React from "react";
import './style.css'
function Navbar() {
  return (
    <div className="navbar-container">
      <div className="navbar-logo">
        <img
          src="https://andela.com/wp-content/uploads/2022/03/AND-Logo-Lockup-Green-Black-RGB.svg"
          alt="image not found"
        />
      </div>
      <div className="navbar-menu">
        <ul>
          <li>
            <a>Technologists</a>
          </li>
          <li>
            <a>Clients</a>
          </li>
          <li>
            <a>Enterprise</a>
          </li>
          <li>
            <a>About Us</a>
          </li>
        </ul>
      </div>
      <div className="navbar-btns">
        <a>Find a work</a>
        <a>Discover Talent</a>
        
      </div>
    </div>
  );
}

export default Navbar;
