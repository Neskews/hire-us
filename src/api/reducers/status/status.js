import { 
  START_FETCHING,
  END_FETCHING
 } from "./actions";

export const status = (state, { type }) => {
  switch (type) {
    case START_FETCHING:
      return {
        ...state,
        isFetching: true
      }
    case END_FETCHING:
      return {
        ...state,
        isFetching: false
      }
    default:
      return state;
  }
}