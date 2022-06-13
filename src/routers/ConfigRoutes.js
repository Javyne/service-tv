import React from 'react'
import {Routes,  Route} from "react-router-dom";
import { Home } from '../components/serviceTV/Home';
import { Usuarios } from '../components/serviceTV/Usuarios';
import { Tecnicos } from '../components/serviceTV/Tecnicos';
import { Marcas } from '../components/serviceTV/Marcas';
import { TipoEquipos } from '../components/serviceTV/TipoEquipos';

export const ConfigRoutes = () => {
  return (
    <div>
      
      <Routes>
        <Route exact path="usuarios" element={<Usuarios/>} />
        <Route exact path="tecnicos" element={<Tecnicos/>} />
        <Route exact path="marcas" element={<Marcas/>} />
        <Route exact path="tipo_equipos" element={<TipoEquipos/>} />
        <Route path="*" element={<Home/>} />
      </Routes>
    </div>
  )
}