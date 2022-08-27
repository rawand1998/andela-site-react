import React from "react";
import "./style.css";
function LookingFor({ img, content, img2, content2, img3, content3 }) {
  return (
    <div className="column-container">
      <h2>
        <em>Find</em> what you’re looking for and more
      </h2>
      <div style={{ height: "12px" }}></div>
      <div className="block-column1">
        <figure>{img}</figure>
        <div
          class="wp-block-columns"
          style={{ flexBasis: "100px", width: "200px" }}
        ></div>
        <div class="wp-block-column">{content}</div>
      </div>

      <div class="spacer"></div>
      <div className="block-column1 block2">
        <div
          class="wp-block-columns"
          style={{ flexBasis: "100px", width: "200px" }}
        ></div>
        <div class="wp-block-column">{content2}</div>
        <figure>{img2}</figure>
      </div>

      <div class="spacer"></div>
      <div className="block-column1 block3">
        <figure>{img3}</figure>
        <div
          class="wp-block-columns"
          style={{ flexBasis: "100px", width: "200px" }}
        ></div>
        <div class="wp-block-column">{content3}</div>
      </div>
    </div>
  );
  
}

export default LookingFor;
