import React from 'react'
import './style.css'

function Communction() {
  return (
    <div className="communction-container">
  <div className="overlay">
        </div>
        <div className="content-column">
            <div className="spacer-1"></div>
            <div className="inner-content">
            <div className="conent-col1">
                
                <h1><em>Spark</em> a <br/> thoushand <br/>communction<br/></h1>
                <p>Becoming part of a community <br/>has never been easier.</p>
                <div className="spacer"></div>
                <div className="button">
                     <a href="#register">Get Started</a>
                </div>
                 </div>
            <div className="conent-col2"> 
            <ol>
                <li>
                    <strong>Demonstrate your skills</strong>
                    <br/>
                    Join our expert community by completing a short assessment to showcase your skills.
                </li>
                <li>
                    <strong>Personalized matching</strong>
                    <br/>
                    You’ve done the work to build your experience and knowledge. Now we’ll find your dream role through enhancing your profile, career coaching, and introducing you to the world’s most innovative companies.
                </li>
                <li>
                    <strong>Unlock your potential</strong>
                    <br/>
                    Once you land your perfect role, Andela is here to support you to hone your craft and achieve your goals.
                </li>
            </ol>
            </div>
            </div>
        </div>
        <div className="spacer-1"></div>
    </div>
  )
}

export default Communction