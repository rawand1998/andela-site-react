import React from "react";
import "./style.css";
function LookingFor({
  title,

  img,
  content,
  clas,
 
}) {
  return (
    <div className="looking-column-container">
      <h2>{title}</h2>
      <div className={`looking-for-content  ${clas}`}>
        <div className="imgbox-looking-for">{img}</div>
        <div className="looking-for-content-wrapper">{content}</div>
      </div>
    </div>
  );
}

export default LookingFor;
