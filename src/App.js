import { FilterPanel } from "components/FilterPanel";
import { JobList } from "components/JobList";
import { TheHeader } from "components/TheHeader";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addJobs } from "store/jobs/jobsActions";
import data from "./mock/data.json";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addJobs(data));
  }, [dispatch]);

  return (
    <>
      <TheHeader />
      <main>
        <div className="container">
          <FilterPanel />
          <JobList />
        </div>
      </main>
      <footer> </footer>
    </>
  );
}

export default App;
