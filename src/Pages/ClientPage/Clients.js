import React from 'react'
import './style.css'
import Header from '../../Components/Common/Header/Header'
import Footer from "../../Components/Common/Footer/Footer";
import SubHeader from "../../Components/Common/SubHeader/SubHeader";
import Navbar from "../../Components/Common/NavBar/Navbar";
function Clients() {
  return (
    <div>
            <Header className="home" id="header-conatiner">
        <Navbar />
        <SubHeader
          title="
          Scale your business
          with technologists
          you can trust"
          description="Accelerate innovation with vetted technical talent."
        />
      </Header>
      <a className="btn">Discover Talent</a>
    
    </div>
  )
}

export default Clients