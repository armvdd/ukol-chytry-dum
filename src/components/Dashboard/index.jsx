import React from "react";
import Lights from "../Lights";
import Climate from "../Climate";
import Energy from "../Energy";
import "./style.css"
import Blinds from "../Blinds";

const Dashboard = ({data}) => {
  return (
  <main className="dashboard">
      <Lights lights={data.lights}/>
      <Climate temperature={data.climate.temperature} humidity={data.climate.humidity} />
      <Blinds state={data.blinds} />
      <Energy electricity = {data.energyConsumption.electricity} water={data.energyConsumption.water} /> 
  </main>
  )
};

export default Dashboard;