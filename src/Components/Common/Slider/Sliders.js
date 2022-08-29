import React from "react";
import "./style.css";
import Slider from "react-slick";
function Sliders() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
  };
  return (
    <div className="slidersss">
      <div className="b-side">
      <h2>We’re in the business of changing lives </h2>
      <div className="spacer"></div>
      <Slider {...settings} >
        <div>
          <div className="slider-home">
            <img src="https://andela.com/wp-content/uploads/2022/03/Logitech-Logo-2015-present-copy-1024x576.png" />
            <p>
              Andela provides excellent service and support, speedy recruitment,
              and top-notch talent. They identified the perfect match
              skillset-wise.{" "}
            </p>
          </div>
        </div>

        <div>
          <div className="slider-home slide2">
            <img src="https://andela.com/wp-content/uploads/2022/03/branch-logo-kale-1.png" />

            <p>
              We love working with Andela. Overall we’ve had a great experience
              with the engineering talent who have joined Branch.
            </p>
          </div>
        </div>

        <div>
          <div className="slider-home slide3">
            <img src="https://andela.com/wp-content/uploads/2022/03/attune-1024x343.png" />

            <p>
              We are getting a very large bang for our buck. The resources I
              have on my team are self-starters and are able to take direction
              and execute.
            </p>
          </div>
        </div>

        <div>
          <div className="slider-home">
            <img src="https://andela.com/wp-content/uploads/2022/03/gopuff.png" />

            <p>
              The team has been very transparent when sourcing our needs and if
              we need to change direction they are able to quickly turn around
              candidates.
            </p>
          </div>
        </div>

        <div>
          <div className="slider-home slide3">
            <img src="https://andela.com/wp-content/uploads/2022/03/Fluxx-logo-google-apps-copy.png" />

            <p>
              We have been working with our Andela teammates since 2018. They
              are so committed, work incredibly well with our team.
            </p>
          </div>
        </div>

        <div>
          <div className="slider-home slide2">
            <img src="https://andela.com/wp-content/uploads/2022/03/Fluxx-logo-google-apps-copy.png" />

            <p>
              We have been working with our Andela teammates since 2018. They
              are so committed, work incredibly well with our team.
            </p>
          </div>
        </div>

        <div>
          <div className="slider-home">
            <img src="https://andela.com/wp-content/uploads/2022/03/attune-1024x343.png" />

            <p>
              We have been working with our Andela teammates since 2018. They
              are so committed, work incredibly well with our team.
            </p>
          </div>
        </div>

        <div>
          <div className="slider-home slide3">
            <img src="https://andela.com/wp-content/uploads/2022/03/Logitech-Logo-2015-present-copy-1024x576.png" />
            <p>
              Andela provides excellent service and support, speedy recruitment,
              and top-notch talent. They identified the perfect match
              skillset-wise.{" "}
            </p>
          </div>
        </div>

        <div>
          <div className="slider-home slide2">
            <img src="https://andela.com/wp-content/uploads/2022/03/Logitech-Logo-2015-present-copy-1024x576.png" />
            <p>
              Andela provides excellent service and support, speedy recruitment,
              and top-notch talent. They identified the perfect match
              skillset-wise.{" "}
            </p>
          </div>

          
        </div>
      </Slider>
    </div>
    </div>
  );
}

export default Sliders;
