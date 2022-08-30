import React from "react";
import "./style.css";
import Slider from "react-slick";
function Sliders() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    arrows: false,
  };

  const data = [
    {
      logo: "https://andela.com/wp-content/uploads/2022/03/Logitech-Logo-2015-present-copy-1024x576.png",
      content: `Andela provides excellent service and support, speedy recruitment,
      and top-notch talent. They identified the perfect match
      skillset-wise.`,
    },
    {
      avatar:
        "https://andela.com/wp-content/uploads/2022/03/Logitech-Logo-2015-present-copy-1024x576.png",
      name: "jommaaa",
      username: "luffy",
      content: `Andela provides excellent service and support, speedy recruitment,
      and top-notch talent. They identified the perfect match
      skillset-wise.`,
    },
    {
      logo: "https://andela.com/wp-content/uploads/2022/03/Logitech-Logo-2015-present-copy-1024x576.png",
      content: `Andela provides excellent service and support, speedy recruitment,
      and top-notch talent. They identified the perfect match
      skillset-wise.`,
    },
    {
      avatar:
        "https://andela.com/wp-content/uploads/2022/03/Logitech-Logo-2015-present-copy-1024x576.png",
      name: "jommaaa",
      username: "luffy",
      content: `Andela provides excellent service and support, speedy recruitment,
      and top-notch talent. They identified the perfect match
      skillset-wise.`,
    },
    ,
    {
      logo: "https://andela.com/wp-content/uploads/2022/03/Logitech-Logo-2015-present-copy-1024x576.png",
      content: `Andela provides excellent service and support, speedy recruitment,
      and top-notch talent. They identified the perfect match
      skillset-wise.`,
      clas: "blue",
    },
    {
      avatar:
        "https://andela.com/wp-content/uploads/2022/03/Logitech-Logo-2015-present-copy-1024x576.png",
      name: "jommaaa",
      username: "luffy",
      content: `Andela provides excellent service and support, speedy recruitment,
      and top-notch talent. They identified the perfect match
      skillset-wise.`,
      clas: "blue",
    },
    ,
    {
      logo: "https://andela.com/wp-content/uploads/2022/03/Logitech-Logo-2015-present-copy-1024x576.png",
      content: `Andela provides excellent service and support, speedy recruitment,
      and top-notch talent. They identified the perfect match
      skillset-wise.`,
      clas: "yalleo",
    },
    {
      avatar:
        "https://andela.com/wp-content/uploads/2022/03/Logitech-Logo-2015-present-copy-1024x576.png",
      name: "jommaaa",
      username: "luffy",
      content: `Andela provides excellent service and support, speedy recruitment,
      and top-notch talent. They identified the perfect match
      skillset-wise.`,
      clas: "red",
    },
  ];

  return (
    <div className="slidersss">
      <h2>We’re in the business of changing lives </h2>
      <div className="bowl_slider">
        <Slider className="the-slider" {...settings}>
          {data.map(({ logo, avatar, name, username, content, clas }, i) => {
            return (
              <div className={`card_slider ${clas}`} key={i}>
                {logo ? (
                  <img className="cover_Card" src={logo} alt="" />
                ) : (
                  <div className="card_slider_useravatar">
                    <img src={avatar} alt="" />
                    <div className="user_info_slider">
                      <span>{name}</span>
                      <span>{username}</span>
                    </div>
                  </div>
                )}
                <div className="content_Card_slider">
                  <span>{content}</span>
                </div>
              </div>
            );
          })}
          {/* <div className="slider-home">
            <img src="https://andela.com/wp-content/uploads/2022/03/Logitech-Logo-2015-present-copy-1024x576.png" />
            <span>
              Andela provides excellent service and support, speedy recruitment,
              and top-notch talent. They identified the perfect match
              skillset-wise.
            </span>
          </div>

          <div className="slider-home slide2">
            <img src="https://andela.com/wp-content/uploads/2022/03/branch-logo-kale-1.png" />
            <span>
              We love working with Andela. Overall we’ve had a great experience
              with the engineering talent who have joined Branch.
            </span>
          </div>

          <div className="slider-home slide3">
            <img src="https://andela.com/wp-content/uploads/2022/03/attune-1024x343.png" />
            <span>
              We are getting a very large bang for our buck. The resources I
              have on my team are self-starters and are able to take direction
              and execute.
            </span>
          </div>

          <div className="slider-home">
            <img src="https://andela.com/wp-content/uploads/2022/03/gopuff.png" />
            <span>
              The team has been very transparent when sourcing our needs and if
              we need to change direction they are able to quickly turn around
              candidates.
            </span>
          </div>

          <div className="slider-home slide3">
            <img src="https://andela.com/wp-content/uploads/2022/03/Fluxx-logo-google-apps-copy.png" />
            <span>
              We have been working with our Andela teammates since 2018. They
              are so committed, work incredibly well with our team.
            </span>
          </div>

          <div className="slider-home slide2">
            <img src="https://andela.com/wp-content/uploads/2022/03/Fluxx-logo-google-apps-copy.png" />

            <span>
              We have been working with our Andela teammates since 2018. They
              are so committed, work incredibly well with our team.
            </span>
          </div>

          <div className="slider-home">
            <img src="https://andela.com/wp-content/uploads/2022/03/attune-1024x343.png" />
            <span>
              We have been working with our Andela teammates since 2018. They
              are so committed, work incredibly well with our team.
            </span>
          </div>

          <div className="slider-home slide3">
            <img src="https://andela.com/wp-content/uploads/2022/03/Logitech-Logo-2015-present-copy-1024x576.png" />
            <span>
              Andela provides excellent service and support, speedy recruitment,
              and top-notch talent. They identified the perfect match
              skillset-wise.
            </span>
          </div>

          <div className="slider-home slide2">
            <img src="https://andela.com/wp-content/uploads/2022/03/Logitech-Logo-2015-present-copy-1024x576.png" />
            <span>
              Andela provides excellent service and support, speedy recruitment,
              and top-notch talent. They identified the perfect match
              skillset-wise.
            </span>
          </div> */}
        </Slider>
      </div>
    </div>
  );
}

export default Sliders;
