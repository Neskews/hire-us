import {
  SET_EVENT_FILTER,
  SET_KIND_FILTER
} from './actions';

export const setEventFilter = (event) => ({
  type: SET_EVENT_FILTER,
  event
});

export const setKindFilter = (kind) => ({
  type: SET_KIND_FILTER,
  kind
});