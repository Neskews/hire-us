import React, { useState } from 'react';
import { Button } from "../../../../../Components/Button/Button";
import { TextInput } from "../../../../../Components/TextInput/TextInput";

export const Login = ({ onLogin }) => {
  const [ state, setState ] = useState({
    name: "",
    password: ""
  });

  return (
    <>
      <TextInput
        type="text"
        value={state.name}
        onChange={(name) => setState({ ...state, name })}
      />
      <TextInput
        type="password"
        value={state.password}
        onChange={(password) => setState({ ...state, password })}
      />
      <Button
        label="login"
        onClick={() => onLogin(state)}
      />
    </>
  )
}