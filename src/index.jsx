import React from "react";
import { render } from "react-dom";
import { smartHomeData } from "./smartHomeData";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import "./style.css";

const App = () => (
  <>
    <html lang="cs" />
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Chytrý dům</title>
      <link rel="stylesheet" href="style.css" />
    </head>
    <body>
      <div className="container">
        <Header title="Chytrý dům" />
        <Dashboard data={smartHomeData} />
      </div>
    </body>
  </>
);

render(<App />, document.querySelector("#app"));
