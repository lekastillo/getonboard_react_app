const jobsReducer = (jobs, action) => {
  switch (action.type) {
    case `FETCH_JOBS`:
      return action.payload
    default:
      return jobs
  }
}

export default jobsReducer;
