import React, {useState} from "react";
import blindsOpen from "./blinds-open.svg";
import blindsClosed from "./blinds-closed.svg";
import "./style.css";

const Blinds = ({state}) => {

    const [blinds, setBlinds] = useState(state);



     return(
        <div className="blinds">
        <div className="blinds__icon">
            <img src={blinds==="open"? blindsOpen : blindsClosed} />
        </div>
        <div className="blinds__name">
            Žaluzie
        </div>
        <div className="blinds__controls">
            <button className={blinds==="open"? "button--active" : "button"} onClick={()=>setBlinds("open")}>Otevřeno</button>
            <button className={blinds==="closed"? "button--active" : "button"} onClick={()=>setBlinds("closed")}>Zavřeno</button>
        </div>
    </div>
     )
}

export default Blinds;