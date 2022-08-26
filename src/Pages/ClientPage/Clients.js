import React from 'react'
import './style.css'
import Header from '../../Components/Common/Header/Header'
import Footer from "../../Components/Common/Footer/Footer";
import SubHeader from "../../Components/Common/SubHeader/SubHeader";
import Navbar from "../../Components/Common/NavBar/Navbar";
function Clients() {
  return (
    <div>
            <Header className="home" id="header-conatiner">
        <Navbar />
        <SubHeader
          title="
          Scale your business
          with technologists
          you can trust"
          description="Accelerate innovation with vetted technical talent."
        />
      </Header>
      <a className="btn">Discover Talent</a>
    <div className="slider-bar">
        <div className="innerslider-bar">
            <h2>We’re <em>Trusted</em> by the best</h2>
            <div className="logo-carousel-container">
                <div className="logo-carousel-block">
                    <div className="slick-list">
                        <div className="slick-track">
                            
                           <div className="slick-1">
                           <img src="https://andela.com/wp-content/uploads/2022/03/logo-jamf-1.png"/>
                           </div>
                           <div className="slick-1">
                           <img src="https://andela.com/wp-content/uploads/2022/03/logo-kraft-heinz-1.png"/>
                           </div>
                           <div className="slick-1">
                           <img src="https://andela.com/wp-content/uploads/2022/03/logo-mastercard.png"/>
                           </div>
                           <div className="slick-1">
                           <img src="https://andela.com/wp-content/uploads/2022/03/logo-mindshare-1.png"/>
                           </div>
                           <div className="slick-1">
                           <img src="https://andela.com/wp-content/uploads/2022/03/logo-pluralsight-1.png"/>
                           </div>
                           <div className="slick-1">
                           <img src="https://andela.com/wp-content/uploads/2022/03/logo-seismic-1.png"/>
                           </div>
                           <div className="slick-1">
                           <img src="https://andela.com/wp-content/uploads/2022/03/logo-viacomcbs.png"/>
                           </div>
                           <div className="slick-1">
                           <img src="https://andela.com/wp-content/uploads/2022/03/logo-casper-1-1.png"/>
                           </div>
                           <div className="slick-1">
                           <img src="https://andela.com/wp-content/uploads/2022/03/logo-cloudflare-1.png"/>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Clients