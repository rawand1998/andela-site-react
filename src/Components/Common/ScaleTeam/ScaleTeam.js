import React from "react";
import "./style.css";
function ScaleTeam({ img, h3, p, button,content }) {
  return (
    <div>
      <div className="block-column1 block3">
        <figure>{img}</figure>
        <div
          class="wp-block-columns"
          style={{ flexBasis: "100px", width: "200px" }}
        ></div>
        <div class="wp-block-column">
          {content}
          
        </div>
      </div>
    </div>
  );
}

export default ScaleTeam;