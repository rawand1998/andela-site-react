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
import SliderBar from "../../Components/Common/SliderBar/SliderBar";
import './style.css'
import Teamoffer from '../../Components/Common/TeamOffer/Teamoffer';
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
      
      <SliderBar />
      <div className="spacer"></div>
      <Teamoffer 
         title ={<>We offer you <em>peace of mind</em></>}
         paragraph={<>  We understand that sometimes you want to find talent on your own{" "}
         <br />
         and other times you want some help. We offer you the freedom to do
         both.</>}
         header1="Source"
         header2="Acesses"
         header3="Match"
         header4="Deliver"
         paragraph1="    We’ll work with you to fully understand your technical gaps,
         culture, industry regulations, and strategic route. Instantly
         view a curated selection of technologist profiles that meet your
         needs."
         paragraph2="    Our proprietary assessments are designed to find you the best
         talent by role, no matter where they are in the world. Based on
         your team’s goals, meet vetted technologists you can trust."
         paragraph3="  Connect within hours, with vetted technologists who can easily
         align with your existing teams, tools, and workflows. Our
         matching times are consistently twice as fast compared to
         industry standards."
         paragraph4="  With a focus on sustainable growth, we’re with you every step of
         the way. From rapid onboarding and seamless integration to
         global payroll solutions and compliance support."
         
         />
    </div>
  )
}

export default Enterprise