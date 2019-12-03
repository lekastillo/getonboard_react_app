import React, { useReducer } from 'react';
import Context from '../components/common/context';
import jobsReducer from './jobsReducer';
import selectedJobReducer from './selectedJobReducer';
import favoriteJobsReducer from './favoriteJobsReducer';

const Provider = ({ children }) => {
  const [jobs, dispatch] = useReducer(jobsReducer, []);
  const [job, dispatchSelecetedJob] = useReducer(selectedJobReducer, []);
  const [favorite_jobs, dispatchFavoriteJobs] = useReducer(favoriteJobsReducer, []);

  return (
    <Context.Provider
      value = {{
        jobs,
        job,
        favorite_jobs,
        dispatch,
        dispatchSelecetedJob,
        dispatchFavoriteJobs
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Provider;
