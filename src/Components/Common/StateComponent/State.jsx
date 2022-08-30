import React from "react";
import "./style.css";
function State() {
  const state = [
    {
      no: "110+",
      name: "Countries represented on 6 continents",
    },
    {
      no: "96+",
      name: "Successful placements",
    },
    {
      no: "70+",
      name: "CFaster than industry standard",
    },

    {
      no: "70.000++",
      name: "Successful placements",
    },
    {
      no: "70+",
      name: "CFaster than industry standard",
    },
  ];
  return (
<div className="state-component">
    <h2>
    Andela <em>keeps you ahead</em> of the curve
  </h2>
    <div class="state-card-container">
      {state.map(({ name, no }, i) => {
        return (
          <div class="state state-1">
            <div class="state-content">
              <h2>{no}</h2>
              <span>{name}</span>
            </div>
          </div>
        );
      })}
    </div>
    <div className="button">
          <a>Find Work</a>
          <a>Discover Talent</a>
        </div>
    </div>
  );
}

export default State;
