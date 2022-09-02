import React from "react";
import "./style.css";
function ScaleTeam({ img, content, bg }) {
  return (
    <div className={`scale-team-container ${bg}`}>
      <figure>{img}</figure>

      <div class="scale-wp-block-column">{content}</div>
    </div>
  );
}

export default ScaleTeam;
