export const ADD_FILTER = "ADD_FILTER";
export const REMOVE_FILTER = "REMOVE_FILTER";
export const CLEAR_FILTERS = "CLEAR_FILTERS";

export const addNewFilter = (filter) => ({
  type: ADD_FILTER,
  filter,
});

export const removeFilter = (filter) => ({
  type: REMOVE_FILTER,
  filter,
});

export const clearFilters = {
  type: CLEAR_FILTERS,
};
