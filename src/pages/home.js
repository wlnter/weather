import React, { useEffect } from "react";
import "./home.css";

import Circles from "../components/circles";
import Nav from "../components/nav";
import Minor from "../components/minor";
import Major from "../components/major";
import Logo from "../components/logo";

export default (props) => {

  return (
    <div className="app">
      <Circles />
      <Logo />
      <div style={{ display: "flex", flex: 1 }}></div>
      <Major location={props.location} weather={props.weather} />
      <Minor weather={props.weather} />
      <Nav />
    </div>
  );
}
