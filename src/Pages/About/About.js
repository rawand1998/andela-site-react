import React from 'react'

import Communction from "../../Components/Common/Communction/Communction";
import Header from "../../Components/Common/Header/Header";
import LookingFor from "../../Components/Common/LookingFor/LookingFor";
import Navbar from "../../Components/Common/NavBar/Navbar";
import Slider from "../../Components/Common/Slider/Slider";
import Footer from "../../Components/Common/Footer/Footer";
import SubHeader from "../../Components/Common/SubHeader/SubHeader";

import SliderBar from "../../Components/Common/SliderBar/SliderBar";
import "./style.css";
import Teamoffer from "../../Components/Common/TeamOffer/Teamoffer";
import ElevateSkill from "../../Components/Common/ElevateSkill/ElevateSkill";
import ScaleTeam from "../../Components/Common/ScaleTeam/ScaleTeam";
function About() {
  return (
    <div>
         <Header className="home" id="header-conatiner">
        <Navbar />
        <SubHeader
          title="

          Our mission is to connect brilliance with opportunity"
          description="Irrespective of race, gender, and geography."
        />
      </Header>
    </div>
  )
}

export default About