import React, { useContext } from 'react';

import SEO from "../components/seo";
import Context from '../components/common/context';

function Job() {

  const { job } = useContext(Context)

  // const getJob = (job) => {
  //   try {
  //     let selected_job= job;

  //   } catch (err) {
  //     navigate('/');
  //   }
  // }

  // useEffect(() => {
  //   getJob()
  // }, []);

  return (
    <div>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title={job ? job.title : ''}
      />

      <section className="flex flex-col md:flex-row items-center">
        <div className="md:mr-8">
          <h1> { job && job.title } </h1>
        </div>
      </section>
    </div>
  );
}

export default Job;
