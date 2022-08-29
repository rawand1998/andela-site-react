import React from "react";
import "./style.css";
import Header from "../../Components/Common/Header/Header";
import Footer from "../../Components/Common/Footer/Footer";
import SubHeader from "../../Components/Common/SubHeader/SubHeader";
import Navbar from "../../Components/Common/NavBar/Navbar";
import LookingFor from "../../Components/Common/LookingFor/LookingFor";
import Communction from "../../Components/Common/Communction/Communction";
import Contected from "../../Components/Common/Connected/Contected"
import SliderBar from "../../Components/Common/SliderBar/SliderBar";
import Teamoffer from "../../Components/Common/TeamOffer/Teamoffer";
import ElevateSkill from "../../Components/Common/ElevateSkill/ElevateSkill";
import LastSlider from "../../Components/Common/LastSlider/LastSlider";

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
      <SliderBar />
      

      <div className="spacer"></div>

      <LookingFor
        img={
          <img src="https://andela.com/wp-content/uploads/2022/03/Container.png" />
        }
        content={
          <>
            <h3>Rigorous vetting for talent from multiple regions</h3>
            <ul>
              <li>Quick and efficient</li>
              <li>Only top quality options</li>
              <li>Stress-free hiring of global talent</li>
            </ul>
          </>
        }
        img2={
          <img src="https://andela.com/wp-content/uploads/2022/03/Visual-1.png" />
        }
        content2={
          <>
            <h3>
              The world’s leading companies
              <br />
              are already here
            </h3>
            <p className="paragraph">
              Feel the bustle of the Global Marketplace here at Andela where
              brilliant minds and companies gather from all over the world.
            </p>
          </>
        }
        img3={
          <img
            src="https://andela.com/wp-content/uploads/2022/03/3-1.png"
            alt="not found"
          />
        }
        content3={
          <>
            <h3>Scale fast and with ease</h3>
            <ul>
              <li>Onboarding is 70% faster</li>
              <li>We provide additional support</li>
              <li>Get the team you need, regardless of size</li>
            </ul>
          </>
        }
      />
      <div className="spacer"></div>
      <div className="team-container">
        <div className="inner-team-container">
          <div className="spacer"></div>
          <div className="inner-content">
            <div className="col1">
              <figure>
                <img src="https://andela.com/wp-content/uploads/2022/03/1-10.png" />
              </figure>
            </div>
            <div className="col2">
              <h5>
                <strong>Build your team today</strong>
              </h5>
              <h2>
                Exceptional
                <br />
                technical <em>talent</em>
              </h2>
              <p>
                Skilled engineers, product managers, and designers at your
                fingertips. An extensive list of technical services to suit your
                business needs. Start building your world-class team faster with
                talent from Andela.
              </p>
              <a>Discover Talent</a>
            </div>
          </div>
          <div className="space"></div>
        </div>
      </div>
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
    
      <div className="spacer"></div>

      <Communction className="communction-container"
 
      
        title={
          <>
          Build a brilliant
          <br/>

            <em>team quickly</em>
           
            <br />
          </>
        }
        paragraph={
          <>
            Brilliant minds and companies come
together to build the future.
          </>
        }
        button="Build your dream team"
        list={
          <>
            <li>
              <strong>Smart skill matching</strong>
              <br />
              Our intuitive machine learning and AI platform finds you the best
              match for any role.
            </li>
            <li>
              <strong>Meet the best talen</strong>
              <br />
              Easily schedule interviews and meet top technologists who fit
              within your team.
            </li>
            <li>
              <strong>Continued excellence</strong>
              <br />
              Integrate your new team members quickly and effectively. Let us
              manage payroll and compliance.
            </li>
          </>
        }
      /> 
    
      <div class="spacer"></div>
      <LastSlider />
      <div class="spacer"></div>
      <div>
      <div class="spacer"></div>
        <h2>Andela <em>keeps you ahead</em> of the curve</h2>
        <div class="space"></div>
        <div class="state-card-container">
            <div class="state state-1">
                <div class="state-content">
                    <h2>110+</h2>
                    <p>Countries represented on 6 continents</p>
                </div>
            </div>
            <div class="state state-2">
            <div class="state-content">
                    <h2>96+</h2>
                    <p>Successful placements</p>
                </div>
            </div>
            <div class="state state-3">
            <div class="state-content">
                    <h2>70+</h2>
                    <p>CFaster than<br/>industry standard</p>
                </div>
            </div>
            <div class="state state-4">
            <div class="state-content">
                    <h2>170.000+</h2>
                    <p>Technologists represented</p>
                </div>
            </div>
            <div class="state state-5">
            <div class="state-content">
                    <h2>80+</h2>
                    <p>Months<br/>Average engagement</p>
                </div>
            </div>
             </div>
             <div className="space"></div>
             <div className="button">
                <a>Find Work</a>
                <a>Discover Talent</a>
             </div>
      </div>
      <div class="spacer"></div>
      <ElevateSkill />
     
      <Contected
        content={
          <div className="connected-last-in-home">
            <h2>
              Connecting your
              <em>brilliance</em>
              <br />
              with opportunity
            </h2>
            <a>Find Work</a>
          </div>
        }
      />
<Footer />
    </div>
  );
}

export default Clients;
