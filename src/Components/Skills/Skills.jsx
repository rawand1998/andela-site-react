import React from "react";
import "./style.css";

function Skills() {
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
    { name: "C#" },
    { name: "React Js" },
    { name: "Django" },
    { name: "Flask" },
    { name: "DevOps" },
    { name: "Swifts" },
    { name: "Django" },
  ];
  return (
    <div className="skills-container">
      <div className="inner-skills">
        <h2>
          Your skills are in <em>demand</em>
        </h2>
        <span>The future is yours to create.</span>
        <ul>
          {skills.map(({ name }, i) => {
            return (
              <li>
                <a>{name}</a>
              </li>
            );
          })}
        </ul>
        <div className="spacer"></div>
        <a className="btn-work">Find work</a>
        <div className="spacer-2"></div>
      </div>
    </div>
  );
}

export default Skills;
