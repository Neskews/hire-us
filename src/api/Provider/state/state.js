import { PROCESSES } from "../../reducers/process/processes";
import bands from './bands.json';


export const state = {
  process: PROCESSES.search,
  status: {
    isFetching: false,
  },
  hire: {
    bandName: ""
  },
  login: {
    name: ""
  },
  data: {
    bands
  },
  filters: {}
}