import React, { useEffect } from "react";
import "./index.css";

import Circles from "../components/circles";
import Nav from "../components/nav";
import Minor from "../components/minor";
import Major from "../components/major";
import Logo from "../components/logo";

import { getLocation, getWeatherNow } from "../service";
import { useAsync } from "../hooks/useAsync";

export default () => {
  const { value: location, setValue: setLocation } = useAsync(getLocation);
  const {
    value: weatherNow,
    setValue: setWeatherNow,
    pending,
    error,
  } = useAsync(getWeatherNow);

  return (
    <div className="app">
      <Circles />
      <Logo />
      <div style={{ display: "flex", flex: 1 }}></div>
      <Major location={location} weather={weatherNow} />
      <Minor weather={weatherNow} />
      <Nav />
    </div>
  );
}
