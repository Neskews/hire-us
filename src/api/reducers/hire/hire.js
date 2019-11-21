import { HIRE } from "./actions";

export const hire = (state, { type, bandName }) => {
  switch (type) {
    case HIRE:
      return {
        ...state,
        hire: {
          ...state.hire,
          bandName
        }
      }
    default:
      return state;
  }
}