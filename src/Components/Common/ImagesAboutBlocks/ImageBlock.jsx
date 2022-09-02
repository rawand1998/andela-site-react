import React from "react";
import "./style.css";
function ImageBlock() {
  const images = [
    {
      img: "https://andela.com/wp-content/uploads/2022/03/Mike-Ndimurukundo-561x600.jpg",
      span: "Co-Founder & CEO",
      strong: "Jeremy Johnson",
      bg:"lightBlue"
    },
    {
      img: "https://andela.com/wp-content/uploads/2022/03/Jeremy-Johnson-561x600.jpg",
      span: "Co-Founder & CEO",
      strong: "Jeremy Johnson",
      bg:"blue"
    },
    {
      img: "https://andela.com/wp-content/uploads/2022/03/Vitri-Bhandari-187x200.jpg",
      span: "Co-Founder & CEO",
      strong: "Jeremy Johnson",
      bg:"pink"
    },
    {
      img: "https://andela.com/wp-content/uploads/2022/03/Mary-Decker-187x200.jpg",
      span: "Co-Founder & CEO",
      strong: "Jeremy Johnson",
      bg:"lightPink"
    },
    {
      img: "https://andela.com/wp-content/uploads/2022/03/Alvaro-Oliveira-561x600.jpg",
      span: "Co-Founder & CEO",
      strong: "Jeremy Johnson",
      bg:"blue"
    },
    {
      img: "https://andela.com/wp-content/uploads/2022/03/Sachin-Bhagwat-187x200.jpeg",
      span: "Co-Founder & CEO",
      strong: "Jeremy Johnson",
      bg:"lightBlue"
    },
    {
      img: "https://andela.com/wp-content/uploads/2022/08/MG_3662-1-2048x1365.jpg",
      span: "Co-Founder & CEO",
      strong: "Jeremy Johnson",
      bg:"pink"
    },
    {
      img: "https://andela.com/wp-content/uploads/2022/07/MG_3545.jpg",
      span: "Co-Founder & CEO",
      strong: "Jeremy Johnson",
      bg:"lightPink"
    },
    {
      img: "https://andela.com/wp-content/uploads/2022/07/Tisbe-Galindo.jpg",
      span: "Co-Founder & CEO",
      strong: "Jeremy Johnson",
      bg:"blue"
    },
    {
      img: "https://andela.com/wp-content/uploads/2022/03/Eryn-Peters-561x600.jpg",
      span: "Co-Founder & CEO",
      strong: "Jeremy Johnson",
      bg:"lightBlue"
    },
    {
      img: "https://andela.com/wp-content/uploads/2022/03/Kirsten-Canton-561x600.jpg",
      span: "Co-Founder & CEO",
      strong: "Jeremy Johnson",
      bg:"pink"
    },
    {
      img: "https://andela.com/wp-content/uploads/2022/03/Patrick-Hennessey-561x600.jpg",
      span: "Co-Founder & CEO",
      strong: "Jeremy Johnson",
      bg:"lightPink"
    },
  ];
  return (
    <div>
      <div className="images-block">
        <div className="imagesHeader">
        <h2>
          Brilliant minds and companies <em>come </em> <br />
          <em>together</em> <em>the future</em>
        </h2>
        <span>
          Meet the team dedicated to helping the world’s best <br />
          companies build the world’s best teams.
        </span>
        </div>
        <figure className="figures">
          {images.map(({ img, strong, span,bg },i) => {
            return (
              <div className="figure">
                <div className="imgboxabout">
                <img src={img} />
                </div>
              
                <div className={`figure-content ${bg}`} key={i}>
                  <strong>{strong}</strong> <span>{span}</span>
                </div>
              </div>
            );
          })}
        </figure>
      </div>
    </div>
  );
}

export default ImageBlock;
