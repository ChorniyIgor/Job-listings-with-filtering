const { createSlice } = require("@reduxjs/toolkit");

const filterSlice = createSlice({
  name: "@@filter",
  initialState: [],
  reducers: {
    addFilter: (state, action) => {
      if (!state.includes(action.payload)) {
        state.push(action.payload);
      }
    },
    removeFilter: (state, action) => {
      return state.filter((item) => item !== action.payload);
    },
    clearFilters: () => [],
  },
});

export const { addFilter, removeFilter, clearFilters } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;

export const getFilters = (state) => state.filters;

export const getAllJobs = (store) => store.jobs;

export const getFiltredJobs = (store, filters) => {
  if (filters.length === 0) return store.jobs;

  return store.jobs.filter((job) => {
    const jobFilters = [].concat([
      job.role,
      job.level,
      ...job.languages,
      ...job.tools,
    ]);

    return filters.every((filter) => jobFilters.includes(filter));
  });
};
