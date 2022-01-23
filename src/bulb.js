import React, { useState } from "react";
import "./bulb.css";

const Bulb = () => {
  const [color, setColor] = useState(
    "https://media.geeksforgeeks.org/wp-content/uploads/OFFbulb.jpg"
  );
  const [line1, setLine1] = useState("OFF");

  const [color2, setColor2] = useState(
    "https://media.geeksforgeeks.org/wp-content/uploads/OFFbulb.jpg"
  );
  const [line2, setLine2] = useState("OFF");

  const change = () => {
    if (line1 === "OFF") {
      setColor("https://media.geeksforgeeks.org/wp-content/uploads/ONbulb.jpg");
      setLine1("ON");
    } else {
      setColor(
        "https://media.geeksforgeeks.org/wp-content/uploads/OFFbulb.jpg"
      );
      setLine1("OFF");
    }
  };

  const change2 = () => {
    if (line2 === "OFF") {
      setColor2(
        "https://media.geeksforgeeks.org/wp-content/uploads/ONbulb.jpg"
      );
      setLine2("ON");
    } else {
      setColor2(
        "https://media.geeksforgeeks.org/wp-content/uploads/OFFbulb.jpg"
      );
      setLine2("OFF");
    }
  };

  return (
    <>
      <div className="wrap">
        <div
          className="bulb"
          style={{ backgroundImage: `url(${color})` }}
        ></div>
        <button className="switch" onClick={change}>
          {line1}
        </button>
      </div>
      <div className="wrap">
        <div
          className="bulb"
          style={{ backgroundImage: `url(${color2})` }}
        ></div>
        <button className="switch" onClick={change2}>
          {line2}
        </button>
      </div>
    </>
  );
};

export default Bulb;
