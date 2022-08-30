import React from "react";
import "./style.css";
function ElevateSkill() {
  const skills = [
    { name: "Python" },
    { name: "React Native" },
    { name: "Javascript" },
    { name: "Golang" },
    { name: "Salesforce" },
    { name: "Node js" },
    { name: "Vue" },
    { name: "Data Scientists" },
    { name: "Java" },
    { name: "Kotlin" },
    { name: "PHP" },
   
  ];
  return (
    <div>
      <div className="elevlate-skills">
        <div className="space"></div>
        <div className="elevlate-skills-content">
          <div className="elevlate-skills-col1">
            <h2>Elevate your business with in demand skills</h2>
            <span>We will help you find the right fit for your business.</span>
            <a>Schedule a call</a>
          </div>
          <div className="elevlate-skills-col2">
          <ul>
          {skills.map(({ name }, i) => {
            return (
              <li>
                <a>{name}</a>
              </li>
            );
          })}
        </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ElevateSkill;
