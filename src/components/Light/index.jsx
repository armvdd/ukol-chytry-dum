import React, { useState } from "react";
import lightOn from "./light-on.svg";
import lightOff from "./light-off.svg";
import "./style.css";

const Light = ({ name, state }) => {
  const [zarovka, setZarovka] = useState(state);

  const handleClick = () => {
    if (zarovka === "on") {
      setZarovka("off"); 
    } else if (zarovka === "off") {
      setZarovka("on"); 
    }
  };


  return (
    <div className="light" onClick={handleClick}>
      <div className="light_icon">
        <img src={lightOff} alt={`light ${state}`} />
      </div>
      <div className="light__name">{name}</div>
      <img src={zarovka==="on"? lightOn : lightOff} alt={`light ${state}`} className = "light_zarovka"/>
    </div>
  );
};

export default Light;
