const selectedJobReducer = (job, action) => {
  switch (action.type) {
    case `SET_SELECTED_JOB`:
      return action.payload
    default:
      return job
  }
}

export default selectedJobReducer;
