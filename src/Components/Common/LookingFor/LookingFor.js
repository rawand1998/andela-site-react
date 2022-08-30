import React from "react";
import "./style.css";
function LookingFor({ title,paragraph,img, content, img2, content2, img3, content3 }) {
  return (
    <div className="looking-column-container">
      <h2>
        {title}
       
      </h2>
      <div style={{ height: "12px" }}></div>
      <div className="lookign-block-column1 looking-block1">
        <figure>{img}</figure>
        <div
          class="wp-block-columns"
          style={{ flexBasis: "100px", width: "200px" }}
        ></div>
        <div class="looking-wp-block-column">{content}</div>
      </div>

      <div class="spacer"></div>
      <div className="lookign-block-column1 looking-block2">
        {/* <div
          class="wp-block-columns"
          style={{ flexBasis: "100px", width: "200px" }}
        ></div> */}
        <div class="looking-wp-block-column">{content2}</div>
        <figure>{img2}</figure>
      </div>

      <div class="spacer"></div>
      <div className="lookign-block-column1 looking-block3">
        <figure>{img3}</figure>
        <div
          class="looking-wp-block-columns"
          style={{ flexBasis: "100px", width: "200px" }}
        ></div>
        <div class="looking-wp-block-column">{content3}</div>
      </div>
    </div>
  );
  
}

export default LookingFor;
