import { GO_TO_BAND_AREA, GO_TO_INFO, GO_TO_BANDS } from "../reducers/process/actions";
import { setLogin, setHire } from "../reducers/reducers";
import { fetchBands } from "./middlewares/fetchBands";

export const useMiddleware = (apiProps) => action => {
  const { dispatch } = apiProps;

  switch (action.type) {
    case GO_TO_BAND_AREA:
      dispatch(setLogin(action.login));
      break;
    case GO_TO_INFO:
      dispatch(setHire(action.bandName));
      break;
    case GO_TO_BANDS:
      fetchBands(apiProps);
      break;
    default:
      dispatch(action);
  }
  dispatch(action);
}