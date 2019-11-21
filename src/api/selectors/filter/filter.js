/**
 * Returns the event the user
 * selected
 */
export const getEventFilter = state => 
  state.filters.event

/**
 * Returns the kind the user
 * selected
 */
export const getKindFilter = state =>
  state.filters.kind

/**
 * Returns the complete filters object
 */
export const getFilters = state => 
  state.filters;

/**
 * Returns a array containing all
 * selected filters
 */
export const getFilterArray = state => {
  const filters = getFilters(state);
  
  return Object.values(filters);
}

