import { getData } from './data';

export const getBands = state => getData(state).bands;

export const getTags = state => {
  const bands = getBands(state);

  return bands.map(({ events, kinds, name }) => ({
    name, events, kinds
  }));
}