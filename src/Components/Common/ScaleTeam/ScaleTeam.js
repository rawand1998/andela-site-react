import React from "react";
import "./style.css";
function ScaleTeam({ img,content }) {
  return (
    <div>
      <div className="scale-team-container">
        <figure>{img}</figure>
        {/* <div
          class="wp-block-columns-scale"
          style={{ flexBasis: "100px", width: "200px" }}
        ></div> */}
        <div class="scale-wp-block-column">
          {content}
          
        </div>
      </div>
    </div>
  );
}

export default ScaleTeam;
