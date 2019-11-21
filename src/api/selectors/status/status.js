export const getStatus = state => state.status;

export const getIsFetching = state => {
  const status = getStatus(state);
  return status.isFetching;
}