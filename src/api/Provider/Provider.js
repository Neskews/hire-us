import React, { useReducer, createContext } from "react";
import { state as defaultState } from './state/state';
import { main } from "../reducers/reducers";

export const Api = createContext();

export const Provider = ({
  children
}) => {
  const [state, dispatch] = useReducer(main, defaultState);

  return (
    <Api.Provider value={{ state, dispatch }}>
      {children}
    </Api.Provider>
  );
};
