import { useEffect, useState, useRef } from "react"
import { AiOutlineMenu } from "react-icons/ai";
import './style.css'
function Navbar() {
  const [isSticky, setSticky] = useState(false)
  const element = useRef(null)
  const handleScroll = () => {
    window.scrollY > 150
      ? setSticky(true)
      : setSticky(false)
  }
  const debounce = (func, wait = 20, immediate = true) => {
    let timeOut
    return () => {
      let context = this,
        args = arguments
      const later = () => {
        timeOut = null
        if (!immediate) func.apply(context, args)
      }
      const callNow = immediate && !timeOut
      clearTimeout(timeOut)
      timeOut = setTimeout(later, wait)
      if (callNow) func.apply(context, args)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", debounce(handleScroll))
    return () => {
      window.removeEventListener("scroll", () => handleScroll)
    }
  }, [debounce, handleScroll])



  return (
    <div className={isSticky ? "navbar-sticky" : "navbar-container"} ref={element}> 
      <div className="navbar-logo">
        {isSticky ? (
          <img  src="https://andela.com/wp-content/uploads/2022/03/AND-Logo-Lockup-Green-Black-RGB.svg"/>

        ):(
          <img
          src="https://andela.com/wp-content/uploads/2022/03/AND-Logo-Lockup-White-RGB-768x202.png"
          alt="image not found" />
        )}
       
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
