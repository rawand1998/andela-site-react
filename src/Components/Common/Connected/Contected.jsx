import React from "react";
import "./style.css";
function Contected({ content, bg, title, btn, classname }) {
  return (
    <div
      className="block-container-connected block2-connnected"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="content-column-connected">
        <div className="inner-content">
          <div className={`block-covered-content ${classname}`}>
            <h2>{title}</h2>
            <span>{content}</span>
            {btn ? <a>{btn}</a> : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contected;
