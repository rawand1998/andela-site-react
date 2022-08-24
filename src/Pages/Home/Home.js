import React from "react";
import Header from "../../Components/Common/Header/Header";
import Navbar from "../../Components/Common/NavBar/Navbar";
import Slider from "../../Components/Common/Slider/Slider";

import SubHeader from "../../Components/Common/SubHeader/SubHeader";
import "./style.css";

function Home() {
  return (
    <div>
      <Header className="home" id="header-conatiner">
        <Navbar />
        <SubHeader
          title="Find work that you love with companies you can trust"
          description="Join Andela to experience the joy of long-term work,
                        with vetted companies and competitive compensation."
        />
      </Header>
      <a className="btn">Find Work</a>
      <div className="spacer"></div>
      <Slider />
      <div className="spacer-2"></div>
      <div className="vedio-conatiner">
        <div className="vedio-inner">
          <h2>Our <em>vibrant</em> community</h2>
          <p>Rizwan Jafri shares his Andela story from Lahore, Pakistan.</p>
          <div className="vedio-box">
            <figure>
              <a href="https://www.youtube.com/embed/NUk9lR2jo_g?fbclid=IwAR1-4JGvdhqxj6S3vt-z5qTjiohuPgoD8Caw1cbeYi8QAAXXWAZNI3pbZwE">
                <img src="https://andela.com/wp-content/uploads/2022/04/andela-commmunity-video-profile-play.jpg" />
              </a>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
