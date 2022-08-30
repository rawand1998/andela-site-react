import React from "react";
import { FaRegUser } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import "./style.css";

function FindWork() {
  return (
    <div className="signup-container">
      <div className="sinup-img">
        <div className="singup-logo">
          <img src="https://signup.andela.com/static/andela-logo-white-d18ee5006242e31c929763a5db88a634.png" />
        </div>
        <div className="signup-img-center">
          <img src="https://signup.andela.com/static/talent-guy-1-48a0a876998025c9c184a2366f70fcf1.png" />
          <div className="signup-title">Reliable jobs</div>
          <div className="signup-paragraph">
            We only work with trusted, vetted companies. Our team works globally
            to eliminate fraud or illegal activity, ensuring the jobs you apply
            for are safe and secure.
          </div>
        </div>
        <div className="signup-points">
          <div className="signup-selecter"></div>
          <div className="p1"></div>
          <div className="p1"></div>
          <div className="p1"></div>
        </div>
      </div>

      <div className="signup-content">
        <div className="signup-divs">
          <div className="signup-selecter-divs"></div>
          <div className="singup-style"></div>
          <div className="singup-style"></div>
          <div className="singup-style"></div>
        </div>
        <div className="signup-form">
          <div className="signup-content-title">
            Becoming a <span>part of our global community</span> has never been
            easier
          </div>
          <div className="signup-form">
            <div className="first-name">first name</div>
            <div className="signup-input">
              <div className="svg">
                <FaRegUser />
              </div>
              <input />
            </div>

            <div className="first-name">Last name</div>
            <div className="signup-input">
              <div className="svg">
                {" "}
                <FaRegUser />
              </div>
              <input />
            </div>

            <div className="first-name">Email</div>
            <div className="signup-input">
              <div className="svg">
                {" "}
                <FaRegEnvelope />
              </div>
              <input />
            </div>

            <div className="first-name">Country</div>
            <div className="signup-input">
              <div className="svg">
                <FaMapMarkerAlt />
              </div>
              {/* <input type="select"/> */}
              <select name="country" id="country">
                <option value="Select Country ...">Select Country ...</option>
                <option value="Afghanistan">Afghanistan</option>
                <option value="Guyana">Guyana</option>
                <option value="Haiti">Haiti</option>
                <option value="Honduras">Honduras</option>
              </select>
            </div>
          </div>

          <div className="singup-checkbox">
            <div className="checkbox">
              <input type="checkbox" />I agree to
              <a>Terms & Conditions</a>
            </div>
            <div className="checkbox">
              <input type="checkbox" />I understand that Andela will process my
              information in accordance with their
              <a>Privacy Policy</a>I may withdraw my consent through unsubscribe
              links at any time.
            </div>
          </div>
          <div className="singup-button">
            <button>Get started</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FindWork;
