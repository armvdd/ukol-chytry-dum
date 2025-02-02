import React, {useState} from "react";
import temp from "./temp.svg";
import "./style.css";

const Climate = ({temperature, humidity}) => {

    const [tem, setTem] = useState(temperature);


    return(
        <div className="climate">
        <div className="climate__icon">
            <img src={temp}/>
        </div>
        <div className="climate__content">
            <div className="climate__temperature">{`${tem}°C`}</div>
            <div className="climate__humidity">Vlhost vzduchu {humidity}%</div>
        </div>
        <div className="climate__controls">
            <button className="button" onClick={()=>setTem(tem+1)}>+</button>
            <button className="button" onClick={()=>setTem(tem-1)}>-</button>
        </div>
    </div>
    )
}

export default Climate;