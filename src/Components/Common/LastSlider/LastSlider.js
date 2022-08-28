import React from "react";
import Slider from "react-slick";
import './style.css'
function LastSlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
  };
  return (
    <div className="sliderss">
      <div className="last-slide-conatiner">
        <div>
          <h2>
            <em>Anytime, anywhere</em> – with Andela,<br/> the world is at your
            fingertips
          </h2>
          <p>
            Discover how leading companies have built impactful global teams
            with Andela.
          </p>
          <Slider {...settings}>
            <div className="last-slide">
                <div className="last-slide-one">
              <div className="last-slide-content">
                <div className="last-slide-title">Case Studies</div>
                <a className="para-btn">
                  {" "}
                  How a Top 10 Global Investment Bank is Rapidly Expanding Its
                  Services by Leveraging Remote Talent
                </a>
                <a className="btn-slide-last">Learn More</a>
              </div>
              </div>
            </div>

            <div className="last-slide two-slide">
                <div className="last-slide-one two">
              <div className="last-slide-content ">
                <div className="last-slide-title">Case Studies</div>
                <a className="para-btn">
                  {" "}
                  How a Top 10 Global Investment Bank is Rapidly Expanding Its
                  Services by Leveraging Remote Talent
                </a>
                <a className="btn-slide-last">Learn More</a>
              </div>
              </div>
            </div>

            <div className="last-slide three-slide">
                <div className="last-slide-one three">
              <div className="last-slide-content ">
                <div className="last-slide-title">Case Studies</div>
                <a className="para-btn">
                  {" "}
                  How a Top 10 Global Investment Bank is Rapidly Expanding Its
                  Services by Leveraging Remote Talent
                </a>
                <a className="btn-slide-last">Learn More</a>
              </div>
              </div>
            </div>

            <div className="last-slide">
                <div className="last-slide-one">
              <div className="last-slide-content">
                <div className="last-slide-title">Case Studies</div>
                <a className="para-btn">
                  {" "}
                  How a Top 10 Global Investment Bank is Rapidly Expanding Its
                  Services by Leveraging Remote Talent
                </a>
                <a className="btn-slide-last">Learn More</a>
              </div>
              </div>
            </div>

            <div className="last-slide two-slide">
                <div className="last-slide-one two">
              <div className="last-slide-content ">
                <div className="last-slide-title">Case Studies</div>
                <a className="para-btn">
                  {" "}
                  How a Top 10 Global Investment Bank is Rapidly Expanding Its
                  Services by Leveraging Remote Talent
                </a>
                <a className="btn-slide-last">Learn More</a>
              </div>
              </div>
            </div>

            <div className="last-slide three-slide">
                <div className="last-slide-one three">
              <div className="last-slide-content ">
                <div className="last-slide-title">Case Studies</div>
                <a className="para-btn">
                  {" "}
                  How a Top 10 Global Investment Bank is Rapidly Expanding Its
                  Services by Leveraging Remote Talent
                </a>
                <a className="btn-slide-last">Learn More</a>
              </div>
              </div>
            </div>

            <div className="last-slide">
                <div className="last-slide-one">
              <div className="last-slide-content">
                <div className="last-slide-title">Case Studies</div>
                <a className="para-btn">
                  {" "}
                  How a Top 10 Global Investment Bank is Rapidly Expanding Its
                  Services by Leveraging Remote Talent
                </a>
                <a className="btn-slide-last">Learn More</a>
              </div>
              </div>
            </div>

            <div className="last-slide two-slide">
                <div className="last-slide-one two">
              <div className="last-slide-content ">
                <div className="last-slide-title">Case Studies</div>
                <a className="para-btn">
                  {" "}
                  How a Top 10 Global Investment Bank is Rapidly Expanding Its
                  Services by Leveraging Remote Talent
                </a>
                <a className="btn-slide-last">Learn More</a>
              </div>
              </div>
            </div>

            <div className="last-slide three-slide">
                <div className="last-slide-one three">
              <div className="last-slide-content ">
                <div className="last-slide-title">Case Studies</div>
                <a className="para-btn">
                  {" "}
                  How a Top 10 Global Investment Bank is Rapidly Expanding Its
                  Services by Leveraging Remote Talent
                </a>
                <a className="btn-slide-last">Learn More</a>
              </div>
              </div>
            </div>

            {/* <div>
              <div className="slider-home-bar ">
                <img src="https://andela.com/wp-content/uploads/2022/03/Logitech-Logo-2015-present-copy-1024x576.png" />
              </div>
            </div>

            <div>
              <div className="slider-home-bar ">
                <img src="https://andela.com/wp-content/uploads/2022/03/Logitech-Logo-2015-present-copy-1024x576.png" />
              </div>
            </div> */}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default LastSlider;
