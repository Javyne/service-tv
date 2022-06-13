import React from 'react'
import { Navegacion } from '../components/serviceTV/Navegacion';
import { Routes,  Route } from "react-router-dom";
import { Home } from '../components/serviceTV/Home';
import { Equipos } from '../components/serviceTV/Equipos';
import { Reparaciones } from '../components/serviceTV/Reparaciones';
import { InfoRoutes } from './InfoRoutes';
import { ConfigRoutes } from './ConfigRoutes';


export const AppRouter = () => {
  return (
    <div>
      <Navegacion />
      <Routes>
        <Route exact path="equipos" element={<Equipos />} />
        <Route exact path="reparaciones" element={<Reparaciones />} />
        <Route exact path="info/*" element={<InfoRoutes />} />
        <Route exact path="config/*" element={<ConfigRoutes />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  )
}
