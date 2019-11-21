import {
  START_FETCHING,
  END_FETCHING
} from './actions';

export const startFetching = () => ({
  type: START_FETCHING
});

export const endFetching = () => ({
  type: END_FETCHING
});