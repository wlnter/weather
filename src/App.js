import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home.js'
import Forecast from './pages/forecast.js'

import { getLocation, getWeatherNow } from "./service";

export default () => {
  const [ location, setLocation ] = useState([101210106, "杭州", "浙江省"])
  const [ weather, setWeather ] = useState({})
  useEffect(()=>{
    getLocation().then(setLocation).catch(err => {
    })
    getWeatherNow()
      .then(setWeather)
      .catch((err) => {});
  }, [])
  return (
    <Routes>
      <Route
        path="/"
        element={<Home location={location} weather={weather} />}
      />
      <Route
        path="/forecast"
        element={<Forecast location={location} weather={weather} />}
      />
    </Routes>
  );
}