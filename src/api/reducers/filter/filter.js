import {
  SET_KIND_FILTER,
  SET_EVENT_FILTER
} from "./actions";

export const filter = (
  state, {
    type,
    kind,
    event
  }
) => {
  switch (type) {
    case SET_KIND_FILTER:
      return {
        ...state,
        kind
      };
    case SET_EVENT_FILTER:
      return {
        ...state,
        event
      };
    default:
      return state;
  }
}