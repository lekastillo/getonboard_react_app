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
  const { jobs, favorite_jobs, dispatch, dispatchSelecetedJob, dispatchFavoriteJobs } = useContext(Context)
  const [loading, setLoading] = useState(false)

  const fetchJobs = async (q) => {
    setLoading(true);
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_API}/search/jobs?q=${q}`);
      const { data_favorite_jobs } = await axios.get(`${process.env.REACT_APP_USER_API}/favorite_jobs`);

      await dispatch({ type: `FETCH_JOBS`, payload: data.jobs });
      await dispatchFavoriteJobs({ type: `FETCH_FAVORITE_JOBS`, payload: data_favorite_jobs.data });
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
              favorite_job = { favorite_jobs.filter(item => item.job_id===job.id ).length === 1 ? true : false }
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
