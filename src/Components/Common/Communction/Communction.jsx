import React from "react";
import "./style.css";

function Communction({ title, paragraph, button, list, overlay }) {
  return (
    <div className="communction-container">
      <div className="overlay"></div>
      <div className="content-column-communction">
        <div className="spacer-1"></div>
        <div className="inner-content-communction">
          <div className="conent-col1">
            <h1>{title}</h1>
            <span>{paragraph}</span>
            <div className="spacer"></div>
            <div className="button">
              <a>{button}</a>
            </div>
          </div>
          <div className="conent-col2">
            <ol>{list}</ol>
          </div>
        </div>
      </div>
      {/* <div className="spacer-1"></div> */}
    </div>
  );
}

export default Communction;
