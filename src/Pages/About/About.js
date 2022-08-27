import React from "react";

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
      <div class="spacer"></div>
      <ScaleTeam
        img={
          <img src="https://andela.com/wp-content/uploads/2022/03/Visual-2.png" />
        }
        content={
          <>
            <h3> What Andela means to us</h3>
            <p>
              We exist to unlock human potential at scale. We envision a world
              where the most talented people can build a career commensurate
              with their ability – not their race, gender, or geography."
            </p>
          </>
        }
      />
      <div className="spacer"></div>
      <div className="images-block">
        <h2>
          Brilliant minds and companies <em>come </em> <br />
          <em>together</em> <em>the future</em>
        </h2>
        <p>
          Meet the team dedicated to helping the world’s best <br />
          companies build the world’s best teams.
        </p>
        <div className="space"></div>
        <figure className="figures">
          <figure>
            <img src="https://andela.com/wp-content/uploads/2022/03/Mike-Ndimurukundo-561x600.jpg" />
            <div className="figure-content">
              <strong>Jeremy Johnson</strong> <p>Co-Founder & CEO</p>
            </div>
          </figure>
          <figure>
            <img src="https://andela.com/wp-content/uploads/2022/03/Jeremy-Johnson-561x600.jpg" />{" "}
            <div className="figure-content">
              <strong>Jeremy Johnson</strong> <p>Co-Founder & CEO</p>
            </div>
          </figure>
          <figure>
            <img src="https://andela.com/wp-content/uploads/2022/03/Vitri-Bhandari-187x200.jpg" />{" "}
            <div className="figure-content">
              <strong>Jeremy Johnson</strong> <p>Co-Founder & CEO</p>
            </div>
          </figure>
          <figure>
            <img src="https://andela.com/wp-content/uploads/2022/03/Mary-Decker-187x200.jpg" />{" "}
            <div className="figure-content">
              <strong>Jeremy Johnson</strong> <p>Co-Founder & CEO</p>
            </div>
          </figure>
          <figure>
            <img src="https://andela.com/wp-content/uploads/2022/03/Alvaro-Oliveira-561x600.jpg" />{" "}
            <div className="figure-content">
              <strong>Jeremy Johnson</strong> <p>Co-Founder & CEO</p>
            </div>
          </figure>
          <figure>
            <img src="https://andela.com/wp-content/uploads/2022/03/Sachin-Bhagwat-187x200.jpeg" />{" "}
            <div className="figure-content">
              <strong>Jeremy Johnson</strong> <p>Co-Founder & CEO</p>
            </div>
          </figure>
          <figure>
            <img src="https://andela.com/wp-content/uploads/2022/08/MG_3662-1-2048x1365.jpg" />{" "}
            <div className="figure-content">
              <strong>Jeremy Johnson</strong> <p>Co-Founder & CEO</p>
            </div>
          </figure>
          <figure>
            <img src="https://andela.com/wp-content/uploads/2022/07/MG_3545.jpg" />{" "}
            <div className="figure-content">
              <strong>Jeremy Johnson</strong> <p>Co-Founder & CEO</p>
            </div>
          </figure>
          <figure>
            <img src="https://andela.com/wp-content/uploads/2022/07/Tisbe-Galindo.jpg" />{" "}
            <div className="figure-content">
              <strong>Jeremy Johnson</strong> <p>Co-Founder & CEO</p>
            </div>
          </figure>
          <figure>
            <img src="https://andela.com/wp-content/uploads/2022/03/Eryn-Peters-561x600.jpg" />{" "}
            <div className="figure-content">
              <strong>Jeremy Johnson</strong> <p>Co-Founder & CEO</p>
            </div>
          </figure>
          <figure>
            <img src="https://andela.com/wp-content/uploads/2022/03/Kirsten-Canton-561x600.jpg" />{" "}
            <div className="figure-content">
              <strong>Jeremy Johnson</strong> <p>Co-Founder & CEO</p>
            </div>
          </figure>
          <figure>
            <img src="https://andela.com/wp-content/uploads/2022/03/Patrick-Hennessey-561x600.jpg" />{" "}
            <div className="figure-content">
              <strong>Jeremy Johnson</strong> <p>Co-Founder & CEO</p>
            </div>
          </figure>
        </figure>
      </div>
      <div className="spacer"></div>

      <div className="block-column1 block3">
        <div class="wp-block-column">
          <h2 className="inverstor">Our Investors</h2>
          <p>We are grateful to be backed by some of the best in the world.</p>
        </div>

        <div
          class="wp-block-columns"
          style={{ flexBasis: "100px", width: "200px" }}
        ></div>
        <figure>
          <img src="https://andela.com/wp-content/uploads/2022/03/Image-from-iOS.png" />
        </figure>
      </div>
      <div className="spacer"></div>

      {/* vedio */}
      <div className="about-vedio-container">
        <div className="inner-about-vedio-container">
          <h2><em>Transforming lives</em> through technology</h2>
          <figure>
            <div>
              <iframe
                loading="lazy"
                title="Andela | Connecting Brilliance and Opportunity"
                width="640"
                height="360"
                src="https://www.youtube.com/embed/84_qZc1-R5M?feature=oembed"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </figure>
        </div>
      </div>
      <div className="spacer"></div>
    </div>
  );
}

export default About;
