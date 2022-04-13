import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home.js'
import Forecast from './pages/forecast.js'

export default () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/forecast" element={<Forecast />} />
    </Routes>
  );
}