
import React from 'react';
import { Login } from "./Login/Connector";
import "./LoginWrapper.scss";

export const LoginWrapper = () => {
  return (
    <div className="LoginWrapper">
      <Login />
    </div>
  )
}

export default LoginWrapper;