import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Header({ className, title, content, link, cover }) {
  return (
    <header style={{ backgroundImage: `url(${cover})` }} className={className}>
      <div className="header-content">
        {cover}
        <span>{title}</span>
        <span>{content}</span>
        {link ? <Link to={link[1]}>{link[0]}</Link> : null}
      </div>
    </header>
  );
}

export default Header;
