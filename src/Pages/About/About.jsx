import React from "react";
import Contected from "../../Components/Common/Connected/Contected";

import Header from "../../Components/Common/Header/Header";

import Navbar from "../../Components/Common/NavBar/Navbar";

import Footer from "../../Components/Common/Footer/Footer";

import SliderBar from "../../Components/Common/SliderBar/SliderBar";
import "./style.css";
import Teamoffer from "../../Components/Common/TeamOffer/Teamoffer";
import ElevateSkill from "../../Components/Common/ElevateSkill/ElevateSkill";
import ScaleTeam from "../../Components/Common/ScaleTeam/ScaleTeam";
function About() {
  return (
    <div>
      <Header
        cover="https://andela.com/wp-content/uploads/2022/03/about-banner.jpg"
        className="header-conatiner"
        title={
          <>
            Scale your business
            <br />
            with technologists
            <br />
            <em>you can trust</em>
          </>
        }
        content={<>Accelerate innovation with vetted technical talent.</>}
        link={["Discver Talent", "/register"]}
      />
      <div class="spacer"></div>
      <ScaleTeam
        img={
          <img src="https://andela.com/wp-content/uploads/2022/03/Visual-2.png" />
        }
        content={
          <>
            <h3> What Andela means to us</h3>
            <span>
              We exist to unlock human potential at scale. We envision a world
              where the most talented people can build a career commensurate
              with their ability – not their race, gender, or geography."
            </span>
          </>
        }
      />
      <div className="spacer"></div>
      <div className="images-block">
        <h2>
          Brilliant minds and companies <em>come </em> <br />
          <em>together</em> <em>the future</em>
        </h2>
        <span>
          Meet the team dedicated to helping the world’s best <br />
          companies build the world’s best teams.
        </span>
        <div className="space"></div>
        <figure className="figures">
          <figure>
            <img src="https://andela.com/wp-content/uploads/2022/03/Mike-Ndimurukundo-561x600.jpg" />
            <div className="figure-content">
              <strong>Jeremy Johnson</strong> <span>Co-Founder & CEO</span>
            </div>
          </figure>
          <figure>
            <img src="https://andela.com/wp-content/uploads/2022/03/Jeremy-Johnson-561x600.jpg" />{" "}
            <div className="figure-content">
              <strong>Jeremy Johnson</strong> <span>Co-Founder & CEO</span>
            </div>
          </figure>
          <figure>
            <img src="https://andela.com/wp-content/uploads/2022/03/Vitri-Bhandari-187x200.jpg" />{" "}
            <div className="figure-content">
              <strong>Jeremy Johnson</strong> <span>Co-Founder & CEO</span>
            </div>
          </figure>
          <figure>
            <img src="https://andela.com/wp-content/uploads/2022/03/Mary-Decker-187x200.jpg" />{" "}
            <div className="figure-content">
              <strong>Jeremy Johnson</strong> <span>Co-Founder & CEO</span>
            </div>
          </figure>
          <figure>
            <img src="https://andela.com/wp-content/uploads/2022/03/Alvaro-Oliveira-561x600.jpg" />{" "}
            <div className="figure-content">
              <strong>Jeremy Johnson</strong> <span>Co-Founder & CEO</span>
            </div>
          </figure>
          <figure>
            <img src="https://andela.com/wp-content/uploads/2022/03/Sachin-Bhagwat-187x200.jpeg" />{" "}
            <div className="figure-content">
              <strong>Jeremy Johnson</strong> <span>Co-Founder & CEO</span>
            </div>
          </figure>
          <figure>
            <img src="https://andela.com/wp-content/uploads/2022/08/MG_3662-1-2048x1365.jpg" />{" "}
            <div className="figure-content">
              <strong>Jeremy Johnson</strong> <span>Co-Founder & CEO</span>
            </div>
          </figure>
          <figure>
            <img src="https://andela.com/wp-content/uploads/2022/07/MG_3545.jpg" />{" "}
            <div className="figure-content">
              <strong>Jeremy Johnson</strong> <span>Co-Founder & CEO</span>
            </div>
          </figure>
          <figure>
            <img src="https://andela.com/wp-content/uploads/2022/07/Tisbe-Galindo.jpg" />{" "}
            <div className="figure-content">
              <strong>Jeremy Johnson</strong> <span>Co-Founder & CEO</span>
            </div>
          </figure>
          <figure>
            <img src="https://andela.com/wp-content/uploads/2022/03/Eryn-Peters-561x600.jpg" />{" "}
            <div className="figure-content">
              <strong>Jeremy Johnson</strong> <span>Co-Founder & CEO</span>
            </div>
          </figure>
          <figure>
            <img src="https://andela.com/wp-content/uploads/2022/03/Kirsten-Canton-561x600.jpg" />{" "}
            <div className="figure-content">
              <strong>Jeremy Johnson</strong> <span>Co-Founder & CEO</span>
            </div>
          </figure>
          <figure>
            <img src="https://andela.com/wp-content/uploads/2022/03/Patrick-Hennessey-561x600.jpg" />{" "}
            <div className="figure-content">
              <strong>Jeremy Johnson</strong> <span>Co-Founder & CEO</span>
            </div>
          </figure>
        </figure>
      </div>
      <div className="spacer"></div>

      <div className="block-column1-inverstor">
        <div class="wp-block-column-inverstor">
          <h2 className="inverstor">Our Investors</h2>
          <span>
            We are grateful to be backed by some of the best
            <br /> in the world.
          </span>
        </div>

        <div
          class="wp-block-columns-inverstor"
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
          <h2>
            <em>Transforming lives</em> through technology
          </h2>
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
      <div className="about-columns">
        <div className="about-columns1">
          <h2>
            We’ve achieved
            <br />
            many <em>great things</em>
          </h2>
          <div style={{ height: "500px" }}></div>
        </div>
        <div className="about-columns2">
          <ol className="start-2022">
            <li>
              <strong>FUTURE</strong> <br />
              <strong>We release our open marketplace</strong>
              <br />
              <br />
              We unlock the ability for our users to interact directly with one
              another while launching new value-added services like healthcare.
            </li>
            <li>
              <strong>FUTURE</strong> <br />
              <strong>We release our open marketplace</strong>
              <br />
              <br />
              We unlock the ability for our users to interact directly with one
              another while launching new value-added services like healthcare.
            </li>
            <li>
              <strong>FUTURE</strong> <br />
              <strong>We release our open marketplace</strong>
              <br />
              <br />
              We unlock the ability for our users to interact directly with one
              another while launching new value-added services like healthcare.
            </li>
            <li>
              <strong>FUTURE</strong> <br />
              <strong>We release our open marketplace</strong>
              <br />
              <br />
              We unlock the ability for our users to interact directly with one
              another while launching new value-added services like healthcare.
            </li>
            <li>
              <strong>FUTURE</strong> <br />
              <strong>We release our open marketplace</strong>
              <br />
              <br />
              We unlock the ability for our users to interact directly with one
              another while launching new value-added services like healthcare.
            </li>
            <li>
              <strong>FUTURE</strong> <br />
              <strong>We release our open marketplace</strong>
              <br />
              <br />
              We unlock the ability for our users to interact directly with one
              another while launching new value-added services like healthcare.
            </li>
            <li>
              <strong>FUTURE</strong> <br />
              <strong>We release our open marketplace</strong>
              <br />
              <br />
              We unlock the ability for our users to interact directly with one
              another while launching new value-added services like healthcare.
            </li>
            <li>
              <strong>FUTURE</strong> <br />
              <strong>We release our open marketplace</strong>
              <br />
              <br />
              We unlock the ability for our users to interact directly with one
              another while launching new value-added services like healthcare.
            </li>
            <li>
              <strong>FUTURE</strong> <br />
              <strong>We release our open marketplace</strong>
              <br />
              <br />
              We unlock the ability for our users to interact directly with one
              another while launching new value-added services like healthcare.
            </li>
          </ol>
        </div>
      </div>

      <div className="spacer"></div>
      <Contected
        classname="connected-center"
        bg="https://andela.com/wp-content/uploads/2022/03/smiling-young-african-american-business-woman-work-2021-08-28-04-34-28-utc.jpg"
        title={`Connecting your
            brilliance
            with opportunity`}
        btn="Find Work"
      />
      <Footer />
    </div>
  );
}

export default About;
