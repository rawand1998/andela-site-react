import React from "react";
import "./style.css";
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
  const dataImg = [
    {
      img: "https://andela.com/wp-content/uploads/2022/03/logo-viacomcbs.png",
    },
    {
      img: "https://andela.com/wp-content/uploads/2022/03/logo-goldman-sachs.png",
    },
    {
      img: "https://andela.com/wp-content/uploads/2022/03/attune-1024x343.png",
    },
    {
      img: "https://andela.com/wp-content/uploads/2022/03/logo-viacomcbs.png",
    },
    {
      img: "https://andela.com/wp-content/uploads/2022/03/logo-jamf-1.png",
    },
    {
      img: "https://andela.com/wp-content/uploads/2022/03/logo-cloudflare-1.png",
    },
    {
      img: "https://andela.com/wp-content/uploads/2022/03/Fluxx-logo-google-apps-copy.png",
    },
    {
      img: "https://andela.com/wp-content/uploads/2022/03/attune-1024x343.png",
    },
    {
      img: "https://andela.com/wp-content/uploads/2022/03/logo-seismic-1.png",
    },
    {
      img: "https://andela.com/wp-content/uploads/2022/03/logo-kraft-heinz-1.png",
    },
  ];
  return (
    <div className="side">
      <div className="b-side">
        <h2>
          We’re <em>trusted</em> by the best{" "}
        </h2>
        <Slider {...settings}>
          {dataImg.map(({ img }, i) => {
            return (
              <div className="slider-home-bar">
                <img src={img} />
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

export default SliderBar;
