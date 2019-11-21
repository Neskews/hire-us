import { getBands } from "../selectors";

export const getHire = ({ hire }) => hire;

export const getHireBandName = state => {
  return getHire(state).bandName;
}

export const getHireBand = state => {
  const hireBandName = getHireBandName(state);
  const bands = getBands(state);

  return bands.find(
    ({ name }) => name === hireBandName
  );
}