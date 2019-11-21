import { startFetching, endFetching } from "../../reducers/reducers";

export const _fetchBands = (
  onSuccess,
  onFailure,
  onEnd
) => window.fetch("/test")
  .then(onSuccess)
  .catch(onFailure)
  .finally(onEnd);

export const fetchBands = apiProps => {
  const { dispatch } = apiProps;
  dispatch(startFetching());

  _fetchBands(
    console.log,
    console.log,
    () => dispatch(endFetching())
  );
}