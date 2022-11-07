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
