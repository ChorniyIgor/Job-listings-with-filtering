import { ADD_FILTER, CLEAR_FILTERS, REMOVE_FILTER } from "./filtersActions";

export const filterReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_FILTER: {
      if (!state.includes(action.filter)) {
        return [...state, action.filter];
      }
      return state;
    }

    case REMOVE_FILTER: {
      return state.filter((item) => item !== action.filter);
    }

    case CLEAR_FILTERS: {
      return [];
    }

    default:
      return state;
  }
};
