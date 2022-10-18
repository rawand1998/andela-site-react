import React from "react";
import Contected from "../../Components/Common/Connected/Contected";

import Header from "../../layouts/Header/Header";

import Navbar from "../../layouts/NavBar/Navbar";

import Footer from "../../layouts/Footer/Footer";

import SliderBar from "../../Components/sliders/SliderBar/SliderBar";
import "./style.css";
import Teamoffer from "../../Components/Common/TeamOffer/Teamoffer";
import ElevateSkill from "../../Components/Common/ElevateSkill/ElevateSkill";
import ScaleTeam from "../../Components/Common/ScaleTeam/ScaleTeam";
import NavBar from "../../layouts/NavBar/Navbar";
import ImageBlock from "../../Components/Common/ImagesAboutBlocks/ImageBlock";
import Future from "../../Components/Common/FutureAboutPage/Future";
function About() {
  return (
    <div>
      <NavBar />

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

      <br />
      <br />
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
      <br />
      <ImageBlock />

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
      <Future />

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
