const favoriteJobsReducer = (favorite_jobs, action) => {
  switch (action.type) {
    case `FETCH_FAVORITE_JOBS`:
      return action.payload
    default:
      return favorite_jobs
  }
}

export default favoriteJobsReducer;
