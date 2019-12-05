import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

import Context from '../components/common/context';
import SEO from "../components/seo";
import FavoriteJobCard from "../components/favorite-job-card";
import JobLoading from "../components/JobLoading";
import Alert from "../components/alert";

const App = () => {
  const { favorite_jobs, dispatchFavoriteJobs } = useContext(Context)
  const [loading, setLoading] = useState(false)

  const getFavoriteJobs = async () => {
    try {
      setLoading(true);
      
      const data=await axios.get(`${process.env.REACT_APP_USER_API}/favorite_jobs`);
      dispatchFavoriteJobs({ type: `FETCH_FAVORITE_JOBS`, payload: data.data });
      setLoading(false)
    } catch (error) {
      alert('something went wrong')
      setLoading(false)
    }
  }

  const handleRemoveFavorite = (id) => {
    confirmAlert({
      title: 'Confirm to remove job from favorites',
      message: 'Are you sure to do this.',
      buttons: [
        {
          label: 'Yes',
          onClick: () => unsetFavorite(id)
        },
        {
          label: 'No',
          onClick: () => []
        }
      ]
    });
  }

  const unsetFavorite = async (job_id) => {
    try {
      setLoading(true);
      await axios.delete(`${process.env.REACT_APP_USER_API}/favorite_jobs/${job_id}`);
      getFavoriteJobs();
      setLoading(false)
    } catch (error) {
      alert('something went wrong')
      setLoading(false)
    }
  }

  useEffect(() => {
    getFavoriteJobs();
  }, []);

  return (
    <>
      <SEO keywords={[`jobs`, `favorite jobs`]} title="Home" />

      <h2 className="text-3xl pl-4 text-blue-darker mt-8"> <i className="material-icons text-2xl text-gob-cyan ">favorite</i> Favorite jobs ({ favorite_jobs && favorite_jobs.length > 0 ? favorite_jobs.length : `0` })</h2>
      <section className="job-list mt-4">

      { loading ? <JobLoading /> : [] }
      {favorite_jobs && favorite_jobs.length > 0  ? (
        <>
          {favorite_jobs.map((job) => (
            <FavoriteJobCard
              delete_favorite= { handleRemoveFavorite }
              job = { job }
            />
          ))}
        </>
      ) : (
        loading ? [] : <Alert title='No jobs found' text='' />
      )}

      </section>
    </>
  );
}

export default App;
