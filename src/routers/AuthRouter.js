import React from 'react'
import {Routes,  Route} from "react-router-dom";
import { LoginScreen } from '../components/auth/LoginScreen';
import { RegisterScreen } from '../components/auth/RegisterScreen';

export const AuthRouter = () => {
  return (
    <div>
      <Routes>
        <Route exact path="login" element={<LoginScreen/>} />
        <Route exact path="register" element={<RegisterScreen/>} />
        <Route path="*" element={<LoginScreen/>} />
      </Routes>
    </div>
  )
}
