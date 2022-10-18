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
      clas: "pink",
    },
    {
      avatar:
        "https://andela.com/wp-content/uploads/2022/03/Adeyinka-Alabi-2-Talent-homepage-150x150.jpg",
      name: "jommaaa",
      username: "luffy",
      content: `Andela provides excellent service and support, speedy recruitment,
      and top-notch talent. They identified the perfect match
      skillset-wise.`,
      clas: "blue",
    },
    {
      logo: "https://andela.com/wp-content/uploads/2022/03/branch-logo-kale-1.png",
      content: ` We love working with Andela. Overall we’ve had a great experience
      with the engineering talent who have joined Branch.`,
      clas: "pink-light",
    },
    {
      avatar:
        "https://andela.com/wp-content/uploads/2022/03/Rafael-Henrique-talent-profile-150x150.jpg",
      name: "jommaaa",
      username: "luffy",
      content: `Andela provides excellent service and support, speedy recruitment,
      and top-notch talent. They identified the perfect match
      skillset-wise.`,
      clas: "blue-light",
    },
    ,
    {
      logo: "https://andela.com/wp-content/uploads/2022/03/attune-1024x343.png",
      content: `AWe are getting a very large bang for our buck. The resources I
      have on my team are self-starters and are able to take direction
      and execute..`,
      clas: "pink",
    },
    {
      avatar:
        "https://andela.com/wp-content/uploads/2022/03/Adetola-Ahmed-talent-profile-150x150.jpg",
      name: "jommaaa",
      username: "luffy",
      content: `Andela provides excellent service and support, speedy recruitment,
      and top-notch talent. They identified the perfect match
      skillset-wise.`,
      clas: "blue",
    },
    ,
    {
      logo: "https://andela.com/wp-content/uploads/2022/03/gopuff.png",
      content: `  The team has been very transparent when sourcing our needs and if
      we need to change direction they are able to quickly turn around
      candidates.`,
      clas: "pink-light",
    },
    {
      logo: "https://andela.com/wp-content/uploads/2022/03/Fluxx-logo-google-apps-copy.png",
      content: ` We have been working with our Andela teammates since 2018. They
      are so committed, work incredibly well with our team.`,
      clas: "blue-light",
    },
    {
      logo: "https://andela.com/wp-content/uploads/2022/03/Fluxx-logo-google-apps-copy.png",
      content: `  We have been working with our Andela teammates since 2018. They
      are so committed, work incredibly well with our team.`,
      clas: "pink",
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
        </Slider>
      </div>
    </div>
  );
}

export default Sliders;
