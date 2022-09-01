import React from "react";
import "./style.css";

function Future() {
  const future = [
    {
      name: "FUTURE",
      title: "We release our open marketplace",
      para: ` We unlock the ability for our users to interact directly with one
          another while launching new value-added services like healthcare.`,
    },
    {
      name: "FUTURE",
      title: "We release our open marketplace",
      para: ` We unlock the ability for our users to interact directly with one
          another while launching new value-added services like healthcare.`,
    },
    {
      name: "FUTURE",
      title: "We release our open marketplace",
      para: ` We unlock the ability for our users to interact directly with one
          another while launching new value-added services like healthcare.`,
    },
    {
      name: "FUTURE",
      title: "We release our open marketplace",
      para: ` We unlock the ability for our users to interact directly with one
          another while launching new value-added services like healthcare.`,
    },
    {
      name: "FUTURE",
      title: "We release our open marketplace",
      para: ` We unlock the ability for our users to interact directly with one
          another while launching new value-added services like healthcare.`,
    },
    {
      name: "FUTURE",
      title: "We release our open marketplace",
      para: ` We unlock the ability for our users to interact directly with one
          another while launching new value-added services like healthcare.`,
    },
    {
      name: "FUTURE",
      title: "We release our open marketplace",
      para: ` We unlock the ability for our users to interact directly with one
          another while launching new value-added services like healthcare.`,
    },
    {
      name: "FUTURE",
      title: "We release our open marketplace",
      para: ` We unlock the ability for our users to interact directly with one
          another while launching new value-added services like healthcare.`,
    },
    {
      name: "FUTURE",
      title: "We release our open marketplace",
      para: ` We unlock the ability for our users to interact directly with one
          another while launching new value-added services like healthcare.`,
    },
  ];
  return (
    <div className="about-columns">
      <div className="about-columns1">
        <h2>
          We’ve achieved
          <br />
          many <em>great things</em>
        </h2>
        <div style={{ height: "500px" }}></div>
      </div>
      <div className="about-columns2">
        <ol className="start-2022">
          {future.map(({ name, para, title }) => {
            return (
              <li>
                <>
                  <strong>{name}</strong>
                  <br />
                  <strong>{title}</strong>
                  <br />
                  <br />
                  {para}
                </>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}

export default Future;
