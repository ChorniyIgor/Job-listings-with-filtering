import { combineReducers } from "redux";
import { filterReducer } from "./filter/filterReducer";
import { jobsReducer } from "./jobs/jobsReducer";

const rootReducer = combineReducers({
  jobs: jobsReducer,
  filters: filterReducer,
});

export default rootReducer;
