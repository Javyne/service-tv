import React from 'react'
import { AppRouter } from './routers/AppRouter';
import { AuthRouter } from './routers/AuthRouter';
import { BrowserRouter, Routes,  Route } from "react-router-dom";
import './styles/general.css';

export const ServiceTVApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="auth/*" element={<AuthRouter/>} />
        <Route path="app/*" element={<AppRouter/>} />
        <Route path="*" element={<AuthRouter/>} />
      </Routes>
    </BrowserRouter> 
  )
}
