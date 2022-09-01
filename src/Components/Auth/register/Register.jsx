import React, { useState, useRef } from "react";
import { FaUser } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import "./style.css";

function Register() {
  const register = [
    { name: "Developer", icon: <FaUser /> },
    { name: "Designer", icon: <FaUser /> },
    { name: "product Manager ", icon: <FaUser /> },
  ];
  const role = [
    { name: "1 Role", icon: <FaUser /> },
    { name: "2-3 Role", icon: <FaUser /> },
    { name: "Full time(+5 Role) ", icon: <FaUser /> },
  ];
  const roleName = [
    { name: "1 Role" },
    { name: "2-3 Role" },
    { name: "Full time(+5 Role) " },
  ];
  const [checkedInput, setCheckedInput] = useState(false);
  const ref = useRef(null);
  const handelCheck = (e) => {
    e.preventDefault();
    if (ref.current.checked) {
      setCheckedInput(false);
    } else {
      setCheckedInput(true);
    }
  };
  return (
    <div className="talent-container">
      <div className="talent-img">
        <img src="https://client.andela.com/assets/global/img_person_onboarding.png" />
      </div>
      <div className="talent-form">
        <div className="talent-nvbar">
          <img src="https://client.andela.com/assets/global/logo_andela.svg" />
          <a href="/login" className="talent-btn">
            Sign in
          </a>
        </div>
        <div className="talent-content">
          <form>
            <h1>Tell us a bit about what you're looking for</h1>
            <div className="conent">
              <h3>How many roles are you looking to fill?</h3>
              <div className="checkbox-talent">
                <input type="checkbox" />
                <label> Not sure yet </label>
              </div>
            </div>
            <div className="talent-choices">
              {role.map(({ name, icon }) => {
                return (
                  <div className="talent-choices-1">
                    <label>
                      <div className="talent-choices-label">
                        <input type="radio" ref={ref} />
                        <span className="talent-icon">{icon}</span>

                        <span> {name} </span>
                      </div>
                    </label>
                  </div>
                );
              })}
            </div>
            {checkedInput && (
              <span className="handel-error-talent">Required</span>
            )}

            <br />

            <div className="conent">
              <h3>
                What time commitment would you need for the roles you're looking
                to fill?
              </h3>
              <div className="checkbox-talent">
                <input type="checkbox" />
                <label> Not sure yet </label>
              </div>
            </div>
            <div className="talent-choices">
              {roleName.map(({ name }) => {
                return (
                  <div className="talent-choices-1">
                    <label>
                      <div className="talent-choices-label">
                        <input type="radio" ref={ref} />

                        <span> {name} </span>
                      </div>
                    </label>
                  </div>
                );
              })}
            </div>
            {checkedInput && (
              <span className="handel-error-talent">Required</span>
            )}
            <br />

            <div className="conent">
              <h3>What roles are you hiring for?</h3>
              <div className="checkbox-talent">
                <input type="checkbox" />
                <label> Not sure yet </label>
              </div>
            </div>

            <div className="talent-choices">
              {register.map(({ name, icon }) => {
                return (
                  <div className="talent-choices-1">
                    <label className="last-label">
                      <div className="talent-choices-label">
                        <input type="checkbox" ref={ref} />

                        <>
                          {icon}
                          <span> {name}</span>
                        </>
                      </div>
                    </label>
                  </div>
                );
              })}
            </div>

            {checkedInput && (
              <span className="handel-error-talent">Required</span>
            )}
            <button class="" onClick={handelCheck}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
