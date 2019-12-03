import React, { useContext, useEffect, useState } from 'react';
import { navigate } from "@reach/router";
import ReactHtmlParser from 'react-html-parser';
import axios from 'axios';

import SEO from "../components/seo";
import Context from '../components/common/context';

function Job({ id }) {

  const { job } = useContext(Context);
  const { favorite_jobs, dispatchFavoriteJobs} = useContext(Context);
  const [isSaving, setSaving] = useState(false)
  const [isLoadin, setLoading] = useState(false)
  // const [favorite_job, setFavoriteJob] = useState([])

  const setFavorite = async () => {
    try {
      setSaving(true);
      await axios.post(`http://localhost:5000/favorite_jobs`,
      {
        "favorite_job":{
          "job_id": job.id
        }
      });
      getFavoriteJobs();
      setSaving(false)
    } catch (error) {
      alert('something went wrong')
      setSaving(false)
    }
  }

  const getFavoriteJobs = async () => {
    try {
      setLoading(true);
      console.log('getting favorites jobs');
      
      const data=await axios.get(`http://localhost:5000/favorite_jobs`);
      dispatchFavoriteJobs({ type: `FETCH_FAVORITE_JOBS`, payload: data.data });
      console.log({ data })
      setLoading(false)
    } catch (error) {
      alert('something went wrong')
      setLoading(false)
    }
  }
  
  useEffect(() => {
    const checkJob = () => {
      console.log('checking job');
      try {
        if (job && job.length === 0){
          navigate('/');
        }
      } catch (err) {
        navigate('/404/');
      }
    };

    checkJob();
    getFavoriteJobs();
  }, []);


  return (
    <div>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title={job ? job.title : ''}
      />

      <section className="flex flex-col">
        <div className="flex flex-row">
          <div className="flex-shrink-0">
            <img className="h-16 w-16 rounded" src={ job.logo_url } alt="Company Logo" />
          </div>
          <div className="flex-shrink-0 pt-5">
            <h3 className="text-gob-cyan font-bold pl-1"> {job.company && job.company.name } </h3> 
            <small className="text-gob-cyan pl-1"> {job.published_at } </small> 
          </div>
        </div>
        <div className="bg-gray mb-3">
          <h3 className="text-5xl leading-none font-semibold text-teal-600 "> {job.title} <br /> <span className="text-gob-cyan text-3xl"> {job.modality} </span> - <span className="text-gob-cyan leading-none text-3xl leading-none"> {job.seniority} </span> </h3>
          <div className=' rounded pl-1 mt-2 flex flex-row '>
            { job.remote === false ? <img className="h-6 w-8 mt-1 rounded" src={ job.country_flag_url } alt="Company Logo" /> : [] }
            { job.remote === false ? <p className='bg-gray-300 ml-2 mr-2 p-1 rounded text-sm font-bold '> {job.city } - {job.country }</p> : [] }
            { job.remote && <p className='bg-gray-300 ml-2 mr-2 p-1 rounded text-sm font-bold '> <i className="material-icons text-sm">room</i> Remote </p> }
            <p className='bg-gray-300 ml-2 mr-2 p-1 rounded text-sm font-bold '> $ {job.salary } </p>
            { favorite_jobs.filter(item => item.job_id=== job.id ).length === 0 ? (
                <span className='bg-gray-300 ml-2 mr-2 p-1 pl-2 pr-2 rounded text-sm font-bold self-end cursor-pointer' onClick={()=> setFavorite() }> <i className="material-icons text-sm">favorite_border</i> Mark as favorite </span>
              ): (<span className='bg-gob-cyan ml-2 mr-2 p-1 pl-2 pr-2 rounded text-sm font-bold self-end'> <i className="material-icons text-gob-red text-sm">favorite</i> Favorite </span>)
            }
           </div>
        </div>
        <hr />
        <div className="flex flex-col pt-3">
          <h3 className='border-b-2 font-extrabold text-teal-600 mb-3 text-2xl'> Descripción </h3>
          <p className="mb-3"> { ReactHtmlParser(job.description) } </p>
          
          <h3 className='border-b-2 font-extrabold text-teal-600 mb-3 text-2xl'> Funciones del cargo </h3>
          <p className="mb-3"> { ReactHtmlParser(job.functions) } </p>

          <h3 className='border-b-2 font-extrabold text-teal-600 mb-3 text-2xl'> Beneficios </h3>
          <p className="mb-3"> { ReactHtmlParser(job.benefits) } </p>
          <a className="bg-blue-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center" href={ `https://www.getonbrd.com${job.url}` } target="_blank" >
            <span>Aplicar</span>
          </a>
           
        </div>
      </section>
    </div>
  );
}

export default Job;
