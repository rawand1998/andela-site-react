import React,{useState,useRef} from "react";
import "./style.css";
import { FaUser } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
function Register() {
    const [checkedInput,setCheckedInput]=useState(false)
    const ref = useRef(null);
    const handelCheck = (e)=>{
        e.preventDefault();
        if (ref.current.checked) {
         
            setCheckedInput(false)
          } else {
          
            setCheckedInput(true)
          }
    }
  return (
    <div className="talent-container">
      <div className="talent-img">
        <img src="https://client.andela.com/assets/global/img_person_onboarding.png" />
      </div>
      <div className="talent-form">
        <div className="talent-nvbar">
          <img src="https://client.andela.com/assets/global/logo_andela.svg" />
          <a href="#" className="talent-btn">
            Sign in
          </a>
        </div>
        <div className="talent-content">
          <form>
            <h1>Tell us a bit about what you're looking for</h1>
            <div className="conent">
              <h3>How many roles are you looking to fill?</h3>
              <div className="checkbox-talent">
                <input type="checkbox"  />
                <label> Not sure yet </label>
              </div>
            </div>
            <div className="talent-choices">
              <div className="talent-choices-1">
                <label>
                  <div className="talent-choices-label">
                    <input type="radio" ref={ref} />
                    <FaUser className="talent-icon" />
                    <span> 1 Role </span>
                  </div>
                </label>
              </div>
              <div className="talent-choices-1">
                <label>
                  <div className="talent-choices-label">
                    <input type="radio" ref={ref}/>
                    <FaUser className="talent-icon" />
                    <span> 2-4 roles </span>
                  </div>
                </label>
              </div>
              <div className="talent-choices-1">
                <label>
                  <div className="talent-choices-label">
                    <input type="radio" ref={ref} />
                    <FaUsers className="talent-icon" />
                    <span> Full team (+5 role) </span>
                  </div>
                </label>
              </div>
             
            </div>
            {checkedInput && <p className="handel-error-talent">Required</p>}
           
            <br/>


            <div className="conent">
              <h3>What time commitment would you need for the roles you're looking to fill?</h3>
              <div className="checkbox-talent">
                <input type="checkbox"/>
                <label> Not sure yet </label>
              </div>
            </div>
            <div className="talent-choices">
              <div className="talent-choices-1">
                <label>
                  <div className="talent-choices-label">
                    <input type="radio" ref={ref}/>
                   
                    <span> full time (60 hour) </span>
                  </div>
                </label>
              </div>
              <div className="talent-choices-1">
                <label>
                  <div className="talent-choices-label">
                    <input type="radio" ref={ref} />
                   
                    <span> part time (20 hour) </span>
                  </div>
                </label>
              </div>
             
            </div>
            {checkedInput && <p className="handel-error-talent">Required</p>}
<br/>


            <div className="conent">
              <h3>What roles are you hiring for?</h3>
              <div className="checkbox-talent">
                <input type="checkbox" />
                <label> Not sure yet </label>
              </div>
            </div>
            <div className="talent-choices">
              <div className="talent-choices-1">
              <label className="last-label">
                  <div className="talent-choices-label">
                    <input type="checkbox" ref={ref} />
                    <FaUser />
                    <span> Developer</span>
                  </div>
                </label>
              </div>
              <div className="talent-choices-1">
                <label className="last-label">
                  <div className="talent-choices-label">
                    <input type="checkbox"  ref={ref}/>
                    <FaUser />
                    <span> Designer </span>
                  </div>
                </label>
              </div>
              <div className="talent-choices-1">
              <label className="last-label">
                  <div className="talent-choices-label">
                    <input type="checkbox" ref={ref} />
                    <FaUser />
                    <span> product Manager </span>
                  </div>
                </label>
              </div>
            </div>
            {checkedInput && <p className="handel-error-talent">Required</p>}
            <button class="" onClick={handelCheck}>Submit</button>
          </form>
        </div>
      </div>


    </div>
  );
}

export default Register;
