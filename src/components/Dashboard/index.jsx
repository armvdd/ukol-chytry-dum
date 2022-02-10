import React from "react";
import Lights from "../Lights";
import Climate from "../Climate";
import "./style.css"

const Dashboard = ({data}) => {
  return (
  <main className="dashboard">
      <Lights lights={data.lights}/>
      <Climate temperature={data.climate.temperature} humidity={data.climate.humidity} />
  </main>
  )
};

export default Dashboard;