import { ADD_JOBS } from "./jobsActions";

export const jobsReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_JOBS: {
      return action.jobsList;
    }
    default:
      return state;
  }
};
