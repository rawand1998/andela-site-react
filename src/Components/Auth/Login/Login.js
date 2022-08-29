import React,{useState,useEffect} from "react";
import "./style.css";
import { FaEyeSlash } from "react-icons/fa";
import {FaExclamationCircle} from "react-icons/fa";

function Login() {
    const initialValues = { email: "", password: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [errorclass,seterrorClass ] = useState(false)
    
    const [formErrors, setFormErrors] = useState({});
    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
      };
      useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 ) {
          console.log(formValues);
        }
      }, [formErrors]);
    function validate(values){
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.username) {
          errors.username = "Username is required!";
          seterrorClass(true)
        }
        if (!values.email) {
          errors.email = "Email is required!";
        } else if (!regex.test(values.email)) {
          errors.email = "This is not a valid email format!";
          seterrorClass(true)
        }
        if (!values.password) {
          errors.password = "Password is required";
          seterrorClass(true)
        } 
        return errors;
    }
    const handelClick = (e)=>{
        e.preventDefault();
        setFormErrors(validate(formValues));
    }
  return (
    <div className="login-container">
      <div className="login-img">
        <img src="https://client.andela.com/assets/global/img_person_login.png" />
      </div>
      <div className="login-form">
        <div className="login-nvbar">
          <img src="https://client.andela.com/assets/global/logo_andela.svg" />
          <a href="/register" className="login-btn">
            Sign up
          </a>
        </div>
        <div className="login-content">
          <h3>welcome!</h3>
          <form>
            
            <div className={errorclass?"error":"username"}>
              <label>Email address*</label>
              <input placeholder="example@gmail.com"  type="text"
             
              name="email"
            
              value={formValues.email}
              onChange={handleChange}/>
                {errorclass ? (
                    <div className="error-handle">
              <p>{formErrors.email}</p>
            <FaExclamationCircle className="error-icon"/>
            
                    </div>
                    
                ):('')}
              
              
            </div>
            <div className={errorclass?"error":"password"}>
              <div className="login-password ">
                <label>Password</label>
                <label className="forget-pass"> forget Password</label>
              </div>
              <input placeholder="Enter your password" value={formValues.password} name="password"   onChange={handleChange}/>
              <div className="eye-icon">
              
             <FaEyeSlash/>
             
              </div>
              {errorclass ? (
                    <div className="error-handle">
              <p>{formErrors.password}</p>
            <FaExclamationCircle className="error-icon"/>
            
                    </div>
                    
                ):('')}
              
              
            </div>
            <button onClick={handelClick}>
                <span>Sign up</span>
            </button>
            <p> Don't have an account? <a>Sign up now</a></p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
