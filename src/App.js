import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home.js'
import Forecast from './pages/forecast.js'
import {
  getForecast7d,
  getLocation,
  getWeatherNow,
  getForecast24h,
} from "./service";

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
      <Routes>
        <Route
          path="/"
          element={<Home location={location} weather={weather} />}
        />
        <Route
          path="/forecast"
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
    </BrowserRouter>
  );
}