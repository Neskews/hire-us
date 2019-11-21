import { SET_LOGIN } from "./actions";

export const login = (state, { type, login }) => {
  if (type === SET_LOGIN) {
    return {
      ...state,
      login
    }
  }

  return state;
}