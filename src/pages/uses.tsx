import React from "react";

const Uses = () => (
  <div
    style={{
      justifyContent: "center",
      display: "flex",
      alignItems: "center",
    }}
  >
    <div>
      <h1 className="main-heading">Spilt Coffee and Lovely Terminals</h1>
      <p>
        These are a few of the things that I use on a daily basis for work
        and/or hobby.
      </p>

      <div>
        <h4>Hardware</h4>
        <ul>
          <li>Custom standing desk</li>
          <li>Keychron K2 with Cherry MX Browns</li>
          <li>Logitech G502 Mouse</li>
          <li>Audio Technica MX50 Headphones</li>
          <li>Blue Yeti Microphone</li>
        </ul>
      </div>

      <div>
        <h4>Software</h4>
        <p>The bread and the butter</p>
        <ul>
          <li>VSCode - Dont think any other editor compares anymore</li>
          <li>iTerm</li>
          <li>ZSH</li>
          <li>Notion</li>
          <li>Google Chrome</li>
        </ul>
      </div>
    </div>
  </div>
);

export default Uses;
