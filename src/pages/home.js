import React, { useEffect } from "react";
import styles from "./home.module.css";

import Circles from "../components/circles";
import Nav from "../components/navbar";
import Minor from "../components/minor";
import Major from "../components/major";
import Logo from "../components/logo";

export default (props) => {
  return (
    <div className={styles.home}>
      <Circles />
      <Logo />
      <div style={{ display: "flex", flex: 1 }}></div>
      <Major location={props.location} weather={props.weather} />
      <Minor weather={props.weather} />
      <Nav />
    </div>
  );
}
