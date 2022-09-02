import { useEffect, useState, useRef } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FaMixer } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./style.css";

function Navbar() {
  const [widthScreen, setWidthScreen] = useState(0);
  const [isSticky, setSticky] = useState(false);
  const [visible, setVisible] = useState(false);
  const element = useRef(null);

  const handleScroll = (e) => {
    let fromTop = window.pageYOffset;
    fromTop > 150 ? setSticky(true) : setSticky(false);
  };

  const changeVisible = () => {
    setVisible(!visible);
  };

  // check when scroll down
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleResize = () => {
    setWidthScreen(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    setWidthScreen(window.innerWidth);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav
      className={
        widthScreen < 700
          ? isSticky
            ? "active mode"
            : "mode"
          : isSticky
          ? "active"
          : visible
          ? "mode"
          : null
      }
      ref={element}
    >
      <Link to="/" className="navbar-logo">
        {isSticky ? (
          <img src="https://andela.com/wp-content/uploads/2022/03/AND-Logo-Lockup-Green-Black-RGB.svg" />
        ) : (
          <img
            src="https://andela.com/wp-content/uploads/2022/03/AND-Logo-Lockup-White-RGB-768x202.png"
            alt="image not found"
          />
        )}
      </Link>
      {widthScreen < 1103 ? (
        <div className="icon-menu">
          {visible ? (
            <FaMixer onClick={changeVisible} />
          ) : (
            <AiOutlineMenu onClick={changeVisible} />
          )}
        </div>
      ) : (
        <div className="bowl_menu">
          <ul className="navbar-menu">
            <li>
              <Link to="/">Technologists</Link>
            </li>
            <li>
              <Link to="/clients">Clients</Link>
            </li>
            <li>
              <Link to="/enterprise">Enterprise</Link>
            </li>
            <li>
              <Link to="/about">About us</Link>
            </li>
            <li>
              <Link className="btns_nav_ find" to="/findwork">
                Find a work
              </Link>
            </li>
            <li>
              <Link className="btns_nav_ discover" to="/register">
                Discover Talent
              </Link>
            </li>
          </ul>
        </div>
      )}

      {visible ? (
        <>
          <div onClick={changeVisible} className="layout_mode"></div>
          <div className="side-nav-visible">
            <ul className="navbar-menu mode">
              <li>
                <Link onClick={changeVisible} to="/">
                  Technologists
                </Link>
              </li>
              <li>
                <Link onClick={changeVisible} to="/clients">
                  Clients
                </Link>
              </li>
              <li>
                <Link onClick={changeVisible} to="/enterprise">
                  Enterprise
                </Link>
              </li>
              <li>
                <Link onClick={changeVisible} to="/about">
                  About us
                </Link>
              </li>
              <li>
                <Link
                  onClick={changeVisible}
                  className="btns_nav_ find"
                  to="/findwork"
                >
                  Find a work
                </Link>
              </li>
              <li>
                <Link
                  onClick={changeVisible}
                  className="btns_nav_ discover"
                  to="/register"
                >
                  Discover Talent
                </Link>
              </li>
            </ul>
          </div>
        </>
      ) : null}
    </nav>
  );
}

export default Navbar;
