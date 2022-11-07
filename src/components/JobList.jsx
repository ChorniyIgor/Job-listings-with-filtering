import { useSelector } from "react-redux";
import { getFilters } from "store/filter/filterSelects";
import { getFiltredJobs } from "store/jobs/jobsSelects";
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
