import React from 'react'
import CommitSuccess from "../../Components/CommitSuccess/CommitSuccess";
import Communction from "../../Components/Common/Communction/Communction";
import Header from "../../Components/Common/Header/Header";
import LookingFor from "../../Components/Common/LookingFor/LookingFor";
import Navbar from "../../Components/Common/NavBar/Navbar";
import Slider from "../../Components/Common/Slider/Slider";
import Footer from "../../Components/Common/Footer/Footer";
import SubHeader from "../../Components/Common/SubHeader/SubHeader";
import Skills from "../../Components/Skills/Skills";
import Contected from "../../Components/Common/Connected/Contected";
import './style.css'
function Enterprise() {
  return (
    <div>
         <Header className="home" id="header-conatiner">
        <Navbar />
        <SubHeader
          title="
          We’re here to help you build a world class team, today."
          description="Join Andela to experience the joy of long-term work,
                        with vetted companies and competitive compensation."
        />
      </Header>
      <div className="enterprise-btn">
      <a className="">Schedule a call</a>
       <a className="">Wacth in overview</a>
       </div>
      <div className="spacer"></div>
    </div>
  )
}

export default Enterprise