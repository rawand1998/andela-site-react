import React from "react";
import Communction from "../../Components/Common/Communction/Communction";
import Header from "../../Components/Common/Header/Header";
import LookingFor from "../../Components/Common/LookingFor/LookingFor";
import Slider from "../../Components/Common/Slider/Sliders";
import Footer from "../../Components/Common/Footer/Footer";
import SliderBar from "../../Components/Common/SliderBar/SliderBar";
import Teamoffer from "../../Components/Common/TeamOffer/Teamoffer";
import ElevateSkill from "../../Components/Common/ElevateSkill/ElevateSkill";
import ScaleTeam from "../../Components/Common/ScaleTeam/ScaleTeam";
import "./style.css";

function Enterprise() {
  return (
    <div className="enter">
      <div className="inter-img">
        <Header className="home" id="header-conatiner">
          {/* <SubHeader
            title="
          We’re here to help you build a world class team, today."
            description="Join Andela to experience the joy of long-term work,
                        with vetted companies and competitive compensation."
          /> */}
        </Header>
      </div>
      <div className="enterprise-btn">
        <a className="">Schedule a call</a>
        <a className="">Wacth in overview</a>
      </div>

      <SliderBar />

      <Teamoffer
        title={
          <>
            We offer you <em>peace of mind</em>
          </>
        }
        paragraph={
          <>
            {" "}
            We understand that sometimes you want to find talent on your own{" "}
            <br />
            and other times you want some help. We offer you the freedom to do
            both.
          </>
        }
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
      <LookingFor
        title={
          <>
            Let’s help you add value to your business
            <span  className="text-muted">
              Discover our global neighborhood of technologists.
            </span>
          </>
        }
        img={
          <img src="https://andela.com/wp-content/uploads/2022/03/section-image-3.jpg" />
        }
        content={
          <>
            <h3>Speed to match</h3>
            <span  class="description">
              Move faster without sacrificing quality. Our team can radically
              reduce the time it takes to hire talent so you can find the right
              fit, quickly.
            </span>
          </>
        }
        img2={
          <img src="https://andela.com/wp-content/uploads/2022/03/shutterstock_1696088776-768x512.jpg" />
        }
        content2={
          <>
            <h3>Enterprise-ready</h3>
            <span  class="descriptions">
              Technologists with verified backgrounds, aligned to your time
              zones, and compliant with your company’s security practices so you
              can focus on making an impact.
            </span>
          </>
        }
        img3={
          <img
            src="https://andela.com/wp-content/uploads/2022/03/shutterstock_1241581108-1-1536x1024.jpg"
            alt="not found"
          />
        }
        content3={
          <>
            <h3>Flexible teams</h3>
            <span  class="">
              Find niche expertise for various project lengths. Onboard solo
              engineers to fill gaps or hire full teams to accelerate your
              build. Any team, any timezone, any skills.
            </span>
          </>
        }
      />
      <div class="spacer"></div>
      <Communction
        title={
          <>
            Build a <em>brilliant</em> team quickly
          </>
        }
        paragraph={
          <>
            Save time and energy with instant access to thousands of
            technologists around the world in three easy steps
          </>
        }
        button="Build your dream team"
        list={
          <>
            <li>
              <strong>Smart skill matching</strong>
              <br />
              Easily schedule interviews and connect with top technologists
              curated to fit your team’s needs.
            </li>
            <li>
              <strong>Meet the best talent</strong>
              <br />
              Our intuitive machine leaerning and AI platform finds you the best
              match for any role.
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
      <div className="spacer"></div>
      <ScaleTeam
        img={
          <img src="https://andela.com/wp-content/uploads/2022/03/section-image-7-1024x897.png" />
        }
        content={
          <>
            <h3>Hire Individuals</h3>
            <span>
              Find the right technologist to complement your existing team and
              hit the ground running on impactful initiatives.
            </span>

            <h3>Build Teams</h3>
            <span>
              Scale rapidly with a full team of technologists embedded at your
              company to unlock more growth and potential.
            </span>
            <a>Work with us</a>
          </>
        }
      />
      <div className="spacer"></div>

      <ElevateSkill />
      <div class="spacer"></div>
      <Slider />
      <div class="spacers"></div>

      <div class="spacer"></div>

      <div className="lookingfor-backgroungd">
        <ScaleTeam
          img={
            <img src="https://andela.com/wp-content/uploads/2022/03/1-1-1.png" />
          }
          content={
            <>
              <h3>Scaling your team globally has never been this easy</h3>
              <span>
                Skilled engineers, product managers, and designers at your
                fingertips. An extensive list of technical services to suit your
                business needs. Cost-effective option for world-class expertise.
              </span>
              <a>Work with us</a>
            </>
          }
        />
      </div>

      <Footer />
    </div>
  );
}

export default Enterprise;