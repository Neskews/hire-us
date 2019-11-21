import { PROCESSES } from "./processes";
import {
  GO_TO_BANDS,
  GO_TO_LOGIN,
  GO_TO_SEARCH,
  GO_TO_BAND_AREA,
  GO_TO_INFO
} from './actions';

const updateProcess = (state, process) => ({
  ...state,
  process
})

export const process = (state, { type }) => {
  switch (type) {
    case GO_TO_LOGIN:
      return updateProcess(state, PROCESSES.login);
    case GO_TO_BANDS:
      return updateProcess(state, PROCESSES.bands);
    case GO_TO_SEARCH:
      return updateProcess(state, PROCESSES.search);
    case GO_TO_BAND_AREA:
      return updateProcess(state, PROCESSES.bandArea);
    case GO_TO_INFO:
      return updateProcess(state, PROCESSES.info);
    default:
      return state;
  }
}