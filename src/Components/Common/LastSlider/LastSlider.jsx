import React from "react";
import Slider from "react-slick";
import "./style.css";
function LastSlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
  };
  const data = [
    {
      title:"case study",
      content: `  We have been working with our Andela teammates since 2018. They
      are so committed, work incredibly well with our team.`,
      btn:'Read more',
      clas: "move",
      clasbg: "move",
    },
    {
      title:"case study",
      content: `  We have been working with our Andela teammates since 2018. They
      are so committed, work incredibly well with our team.`,
      btn:'Read more',
      clas: "pink",
      clasbg: "pink",
    },
    {
      title:"case study",
      content: `  We have been working with our Andela teammates since 2018. They
      are so committed, work incredibly well with our team.`,
      btn:'Read more',
      clas: "orange",
      clasbg: "orange",
    },
    {
      title:"case study",
      content: `  We have been working with our Andela teammates since 2018. They
      are so committed, work incredibly well with our team.`,
      btn:'Read more',
      clas: "move",
      clasbg: "move",
    },
    ,
    {
      title:"case study",
      content: `  We have been working with our Andela teammates since 2018. They
      are so committed, work incredibly well with our team.`,
      btn:'Read more',
      clas: "pink",
      clasbg: "pink",
    },
    {
      title:"case study oragne",
      content: `We have been working with our Andela teammates since 2018. They
      are so committed, work incredibly well with our team.`,
      btn:'Read more',
      clas: "orange",
      clasbg: "orange",
    },
    ,
    {
      title:"case study",
      content: `  We have been working with our Andela teammates since 2018. They
      are so committed, work incredibly well with our team.`,
      btn:'Read more',
      clas: "move",
      clasbg: "move",
    },
    {
      title:"case study",
      content: `  We have been working with our Andela teammates since 2018. They
      are so committed, work incredibly well with our team.`,
      btn:'Read more',
      clas: "pink",
      clasbg: "pink",
    },
    {
      title:"case study",
      content: `  We have been working with our Andela teammates since 2018. They
      are so committed, work incredibly well with our team.`,
      btn:'Read more',
      clas: "orange",
      clasbg: "orange",
    },
  ];
  return (
    <div className="sliderss">
      <div className="last-slide-conatiner">
        <div>
          <div className="sliderHeadertwo">
          <h2>
          Insights to inspire
          </h2>
          <span className="sliderText">
          The latest articles from Andela.
          </span>
          </div>
          <Slider {...settings}>
            {data.map(({ title, content, btn,clas ,clasbg},i) => {
              return (
                <>
                  <div className={`last-slide ${clas}`} key={i}>
                    <div className={`last-slide-one ${clasbg}`}  key={i}>
                      <div className="last-slide-content">
                      <span className="last-slide-title">{title}</span>
                      <a className="para-btn">{content}</a>
                      <a className="btn-slide-last">{btn}</a>
                      </div>
                    
                    </div>
                  </div>
                </>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default LastSlider;
