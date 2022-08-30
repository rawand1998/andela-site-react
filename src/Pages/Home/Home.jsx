import React from "react";
import CommitSuccess from "../../Components/CommitSuccess/CommitSuccess";
import Communction from "../../Components/Common/Communction/Communction";
import Header from "../../Components/Common/Header/Header";
import LookingFor from "../../Components/Common/LookingFor/LookingFor";
import Sliders from "../../Components/Common/Slider/Sliders";
import Footer from "../../Components/Common/Footer/Footer";
import Skills from "../../Components/Skills/Skills";
import Contected from "../../Components/Common/Connected/Contected";
import LastSlider from "../../Components/Common/LastSlider/LastSlider";
import "./style.css";

function Home() {
  return (
    <div className="homes-img">
      <Header
        cover="https://andela.com/wp-content/uploads/2022/03/green-wash.jpg"
        className="header-conatiner"
        title="
      Find work that you
      love with companies
      you can trust"
        content="Join Andela to experience the joy of long-term work,
      with vetted companies and competitive compensation."
        link={["Find Work", "/findwork"]}
      />
      <Sliders />
      <div className="spacer-2"></div>
      <div className="vedio-conatiner">
        <div className="vedio-inner">
          <h2>
            Our <em>vibrant</em> community
          </h2>
          <span>Rizwan Jafri shares his Andela story from Lahore, Pakistan.</span>
          <div className="vedio-box">
            <figure>
              <a href="https://www.youtube.com/embed/NUk9lR2jo_g?fbclid=IwAR1-4JGvdhqxj6S3vt-z5qTjiohuPgoD8Caw1cbeYi8QAAXXWAZNI3pbZwE">
                <img src="https://andela.com/wp-content/uploads/2022/04/andela-commmunity-video-profile-play.jpg" />
              </a>
            </figure>
          </div>
        </div>
      </div>
      <div className="spacer"></div>
      <LookingFor
        title={
          <>
            {" "}
            <em>Find</em> what you’re looking for and more
          </>
        }
        img={
          <img src="https://andela.com/wp-content/uploads/2022/03/shutterstock_1660490494-1024x683.jpg" />
        }
        content={
          <>
            <h3>Grow your career with us</h3>
            <ul>
              <li>
                Find meaningful, long-term work with interesting organizations
              </li>
              <li>Work with an internationally distributed team and company</li>
              <li>
                Gain additional skills through exclusive learning opportunities
              </li>
              <li>
                Network with other technologists to develop your expertise
              </li>
            </ul>
          </>
        }
        img2={
          <img src="https://andela.com/wp-content/uploads/2022/03/shutterstock_1696088776-768x512.jpg" />
        }
        content2={
          <>
            <h3>Grow your career with us</h3>
            <ul>
              <li>Only work with companies we trust</li>
              <li>
                Receive payments on time in your local currency, USD, or in
                Crypto
              </li>
              <li>Discover salaries that match your skills and experience</li>
            </ul>
          </>
        }
        img3={
          <img
            src="https://andela.com/wp-content/uploads/2022/03/shutterstock_1653288229-1024x683.jpg"
            alt="not found"
          />
        }
        content3={
          <>
            <h3>Grow your career with us</h3>
            <ul>
              <li>Ditch the commute and work from anywhere</li>
              <li>
                With roles across different time zones, you choose when you work
              </li>
              <li>
                Gain additional skills through exclusive learning opportunities
              </li>
            </ul>
          </>
        }
      />
      <div className="spacer-1"></div>
      <Communction
        title={
          <>
            <em>Spark</em>
            <br /> thoushand <br />
            communction
            <br />
          </>
        }
        paragraph={
          <>
            Becoming part of a community <br />
            has never been easier.
          </>
        }
        button="Get Started"
        list={
          <>
            <li>
              <strong>Demonstrate your skills</strong>
              <br />
              Join our expert community by completing a short assessment to
              showcase your skills.
            </li>
            <li>
              <strong>Personalized matching</strong>
              <br />
              You’ve done the work to build your experience and knowledge. Now
              we’ll find your dream role through enhancing your profile, career
              coaching, and introducing you to the world’s most innovative
              companies.
            </li>
            <li>
              <strong>Unlock your potential</strong>
              <br />
              Once you land your perfect role, Andela is here to support you to
              hone your craft and achieve your goals.
            </li>
          </>
        }
      />
      <Skills />

      <div className="first-connected-in-home">
        <Contected
          content={
            <>
              <h2>Grow your potential beyond borders</h2>
              <span>
                Connect with a global network and land international
                opportunities.
              </span>
              <a>Discover opportunities</a>
            </>
          }
        />
      </div>

      <div className="spacer-1"></div>
      <CommitSuccess />
      <div className="spacer-1"></div>
      <LastSlider />
      <div className="spacer-1"></div>
      <div className="spacer-1"></div>
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

export default Home;
