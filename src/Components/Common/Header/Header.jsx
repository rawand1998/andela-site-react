import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Header({ className, title, content, link, cover,secondLinl }) {
  return (
    <header style={{ backgroundImage: `url(${cover})` }} className={className}>
      <div className="header-content">
        <h1>{title}</h1>
        <span>{content}</span>
        <div className="links-header"> 
        {secondLinl? <Link to={secondLinl[1]} className="secondlink link">{secondLinl[0]}</Link> : null}
        {link ? <Link to={link[1]} className="firestlink link">{link[0]}</Link> : null}
       
        </div>
      </div>
    </header>
  );
}

export default Header;
