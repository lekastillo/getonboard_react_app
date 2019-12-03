import React, { useContext, useState } from 'react';
import axios from 'axios';
import { navigate } from "@reach/router"

import Context from '../components/common/context';
import SEO from "../components/seo";
import SearchBard from "../components/search-bar";
import JobCard from "../components/job-card";
import JobLoading from "../components/JobLoading";
import Alert from "../components/alert";

const App = () => {
  const { jobs, dispatch, dispatchSelecetedJob } = useContext(Context)
  const [loading, setLoading] = useState(false)

  const fetchJobs = async (q) => {
    setLoading(true);
    try {
      const { data } = await axios.get(`https://www.getonbrd.com/search/jobs?q=${q}`);

      await dispatch({ type: `FETCH_JOBS`, payload: data.jobs });
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  const setSelectedJob = (job) => {
    setLoading(true);
    console.log({job})
    try {

      dispatchSelecetedJob({ type: `SET_SELECTED_JOB`, payload: job });
      setLoading(false);
      navigate('/job');
    } catch (error) {
      setLoading(false);
    }
  };

  const handleChange = e => {
    fetchJobs(e.target.value);
  }

  return (
    <>
      <SEO keywords={[`jobs`, `favorite jobs`]} title="Home" />
      <SearchBard handleChange={ handleChange }/>

      <h2 className="text-3xl border-l-2 border-blue-dark pl-4 text-blue-darker mt-8">List of jobs ({ jobs && jobs.length > 0 ? jobs.length : `0` })</h2>
      <section className="job-list mt-4">

      { loading ? <JobLoading /> : [] }
      {jobs && jobs.length > 0  ? (
        <>
          {jobs.map((job) => (
            <JobCard
              setSelectedJob={setSelectedJob}
              onClick  = { setSelectedJob }
              job = { job }
            />
          ))}
        </>
      ) : (
        loading ? [] : <Alert title='No jobs found' text='Try typing on the search box' />
      )}

      </section>
    </>
  );
}

export default App;
