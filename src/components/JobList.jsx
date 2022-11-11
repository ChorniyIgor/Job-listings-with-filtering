import { useSelector } from "react-redux";
import { getFilters } from "../features/filter/filter-slice";
import { getFiltredJobs } from "../features/filter/filter-slice";
import { JobPosition } from "./JobPosition";

const JobList = () => {
  const filters = useSelector(getFilters);
  const jobListData = useSelector((store) => getFiltredJobs(store, filters));

  return (
    <div className="job-list">
      {jobListData.map((item) => (
        <JobPosition key={item.id} {...item} />
      ))}
    </div>
  );
};

export { JobList };
