import React from "react";
import "./style.css";
function CommitSuccess() {
  const commit = [
    {
      title: "Technologist first culture",
      content: `Ensuring a seamless experience for technologists is our top priority.
    You can rest assured there is always someone looking out for your
    interests and career.`,
    },
    {
      title: "Trusted platform",
      content: ` We only work with trusted and vetted companies. No matter what, we’ll
  ensure you are paid for the work you do, and on time.`,
    },
    {
      title: "Global support",
      content: `   Wherever you are, and whatever issues you may face, we’re here to help
  solve any disputes, fast!`,
    },
  ];
  return (
    <div className="wp-block-columns">
      <div className="wp-block-1">
        <h2>
          Our commitment to
          <br />
          <em>your success</em>
        </h2>
      </div>

      <div className="wp-block-2">
        {commit.map(({ title, content }) => {
          return (
            <>
              <h3>{title}</h3>
              <span>{content}</span>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default CommitSuccess;
