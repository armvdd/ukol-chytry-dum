import React from "react";
import lightOn from "./light-on.svg";
import lightOff from "./light-off.svg";
import "./style.css";

const Light = ({name, state}) => {
    return (
        <div className = "light">
            <div className = "light_icon">
                 <img src = {lightOff} alt = {`light ${state}`}/>
            </div>
            <div class="light__name">
				{name}
			</div>
        </div>
    )
}

export default Light;