import React from "react";
import Header from "../../layouts/Header/Header";
import Footer from "../../layouts/Footer/Footer";
import LookingFor from "../../Components/Common/LookingFor/LookingFor";
import Communction from "../../Components/Common/Communction/Communction";
import Contected from "../../Components/Common/Connected/Contected";
import SliderBar from "../../Components/sliders/SliderBar/SliderBar";
import Teamoffer from "../../Components/Common/TeamOffer/Teamoffer";
import ElevateSkill from "../../Components/Common/ElevateSkill/ElevateSkill";
import LastSlider from "../../Components/sliders/LastSlider/LastSlider";
import "./style.css";
import State from "../../Components/Common/StateComponent/State";
import NavBar from "../../layouts/NavBar/Navbar";
function Clients() {
  return (
    <div>
      <NavBar />
      <div className="clients-img">
        <Header
          cover="https://andela.com/wp-content/uploads/2022/03/annie-spratt-AkftcHujUmk-unsplash-2.jpg"
          className="header-conatiner"
          title={
            <>
              Our mission is to <br />
              connect
              <em>
                brilliance <br />
                with opportunity
              </em>
            </>
          }
          content={<>Irrespective of race, gender, and geography.</>}
        />
      </div>
      <a className="btn">Discover Talent</a>
      <SliderBar />
      <br /> <br />
      <LookingFor
        title={
          <>
            {" "}
            <em>Find</em> what you’re looking for and more
          </>
        }
        img={
          <img src="  https://andela.com/wp-content/uploads/2022/03/Container.png" />
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
      />
      <LookingFor
        clas="classRevrse"
        img={
          <img src="   https://andela.com/wp-content/uploads/2022/03/Visual-1.png" />
        }
        content={
          <>
            <h3>
              The world’s leading companies
              <br />
              are already here
            </h3>
            <span>
              Feel the bustle of the Global Marketplace here at Andela where
              brilliant
              <br /> minds and companies gather from all over the world.
            </span>
          </>
        }
      />
      <LookingFor
        img={
          <img src="https://andela.com/wp-content/uploads/2022/03/3-1.png" />
        }
        content={
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
      <br />
      <div className="team-container">
        <div className="inner-team-container">
          <br />
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
              <span>
                Skilled engineers, product managers, and designers at your
                fingertips. An extensive list of technical services to suit your
                business needs. Start building your world-class team faster with
                talent from Andela.
              </span>
              <a>Discover Talent</a>
            </div>
          </div>
        </div>
      </div>
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
      <Communction
        className="communction-container"
        title={
          <>
            Build a brilliant
            <br />
            <em>team quickly</em>
            <br />
          </>
        }
        paragraph={
          <>Brilliant minds and companies come together to build the future.</>
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
      <LastSlider />
      <div>
        <State />
      </div>
      <ElevateSkill />
      <Contected
        classname="connected-center"
        bg="https://andela.com/wp-content/uploads/2022/03/african-american-young-programmer-working-remote-f-2022-03-25-18-49-53-utc.jpg"
        title={`Grow your business and accelerate
          innovation with Andela`}
        btn="sign up"
      />
      <Footer />
    </div>
  );
}

export default Clients;
