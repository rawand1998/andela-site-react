import React from 'react'
import './style.css'
import Slider from "react-slick";
function SliderBar() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
  };
  return (
    <div className="side">


    <div >
      <h2>We’re in the business of changing lives </h2>
      <Slider {...settings}>
        <div>
          <div className="slider-home-bar">
            <img src="https://andela.com/wp-content/uploads/2022/03/Logitech-Logo-2015-present-copy-1024x576.png" />
            
          </div>
        </div>

        <div>
          <div className="slider-home-bar ">
            <img src="https://andela.com/wp-content/uploads/2022/03/branch-logo-kale-1.png" />

          </div>
        </div>

        <div>
          <div className="slider-home-bar ">
            <img src="https://andela.com/wp-content/uploads/2022/03/attune-1024x343.png" />

          
          </div>
        </div>

        <div>
          <div className="slider-home-bar">
            <img src="https://andela.com/wp-content/uploads/2022/03/gopuff.png" />

           
          </div>
        </div>

        <div>
          <div className="slider-home-bar ">
            <img src="https://andela.com/wp-content/uploads/2022/03/Fluxx-logo-google-apps-copy.png" />

           
          </div>
        </div>

        <div>
          <div className="slider-home-bar ">
            <img src="https://andela.com/wp-content/uploads/2022/03/Fluxx-logo-google-apps-copy.png" />

         
          </div>
        </div>

        <div>
          <div className="slider-home-bar">
            <img src="https://andela.com/wp-content/uploads/2022/03/attune-1024x343.png" />

          
          </div>
        </div>

        <div>
          <div className="slider-home-bar ">
            <img src="https://andela.com/wp-content/uploads/2022/03/Logitech-Logo-2015-present-copy-1024x576.png" />
            
          </div>
        </div>

        <div>
          <div className="slider-home-bar ">
            <img src="https://andela.com/wp-content/uploads/2022/03/Logitech-Logo-2015-present-copy-1024x576.png" />
          
          </div>

          
        </div>
      </Slider>
    </div>
    </div>
  )
}

export default SliderBar