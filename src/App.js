import React, { useEffect, useState, Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import {
  getForecast7d,
  getLocation,
  getWeatherNow,
  getForecast24h,
} from "./service";
const Home = lazy(() => import("./pages/home.js"));
const Forecast = lazy(() => import("./pages/forecast.js"));

export default () => {
  const [ location, setLocation ] = useState([])
  const [ weather, setWeather ] = useState({})
  const [ hourForecast, setHourForecast] = useState([])
  const [ dayForecast, setDayForecast] = useState([]);

  useEffect(()=>{
    getLocation()
      .then((location) => {
        setLocation(location);
        const cityId = location[0]
        getWeatherNow(cityId)
          .then(setWeather)
          .catch((err) => {});
        getForecast24h(cityId)
          .then(setHourForecast)
          .catch((err) => {});
        getForecast7d(cityId)
          .then(setDayForecast)
          .catch((err) => {});
      })
  }, [])
  return (
    <BrowserRouter>
      <Suspense fallback={<div className="wrap"><div className="loader" /></div>}>
        <Routes>
          <Route
            path="*"
            element={<Home location={location} weather={weather} />}
          />
          <Route
            path="/weather/forecast"
            element={
              <Forecast
                location={location}
                weather={weather}
                dayForecast={dayForecast}
                hourForecast={hourForecast}
              />
            }
          />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}