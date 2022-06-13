import React from 'react'
import { Routes, Route } from "react-router-dom";
import { Home } from '../components/serviceTV/Home';
import { Cobros } from '../components/serviceTV/Cobros';
import { Historia } from '../components/serviceTV/Historia';

export const InfoRoutes = () => {
  return (
    <div>

      <Routes>
        <Route exact path="cobros" element={<Cobros />} />
        <Route exact path="historial" element={<Historia />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  )
}