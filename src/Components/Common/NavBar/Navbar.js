import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import './style.css'
function Navbar() {
  return (
    <div className="navbar-container">
      <div className="navbar-logo">
        <img
          src="https://andela.com/wp-content/uploads/2022/03/AND-Logo-Lockup-White-RGB-768x202.png"
          alt="image not found"
        />
      </div>
      <div className="nav">
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
    {/* <div className="icon-menu">
    <AiOutlineMenu />
    </div> */}
    </div>
  );
}

export default Navbar;
