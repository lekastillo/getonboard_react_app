import React, { useReducer } from 'react';
import Context from '../components/common/context';
import jobsReducer from './jobsReducer';
import selectedJobReducer from './selectedJobReducer';

const Provider = ({ children }) => {
  const [jobs, dispatch] = useReducer(jobsReducer, []);
  const [job, dispatchSelecetedJob] = useReducer(selectedJobReducer, []);

  return (
    <Context.Provider
      value = {{
        jobs,
        job,
        dispatch,
        dispatchSelecetedJob
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Provider;
