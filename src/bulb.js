import React, { useState } from "react";
import "./bulb.css";

const Bulb = () => {
  const [color, setColor] = useState("grey");
  const [line1, setLine1] = useState("OFF");

  const [color2, setColor2] = useState("grey");
  const [line2, setLine2] = useState("OFF");

  const change = () => {
    if (line1 === "OFF") {
      setColor("orange");
      setLine1("ON");
    } else {
      setColor("grey");
      setLine1("OFF");
    }
  };

  const change2 = () => {
    if (line2 === "OFF") {
      setColor2("orange");
      setLine2("ON");
    } else {
      setColor2("grey");
      setLine2("OFF");
    }
  };

  return (
    <>
      <div className="wrap">
        <div className="bulb" style={{ backgroundColor: color }}></div>
        <button className="switch" onClick={change}>
          {line1}
        </button>
      </div>
      <div className="wrap">
        <div className="bulb" style={{ backgroundColor: color2 }}></div>
        <button className="switch" onClick={change2}>
          {line2}
        </button>
      </div>
    </>
  );
};

export default Bulb;
