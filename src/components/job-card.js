import React from "react";

const JobCard = ( props ) => {
  return (
    <div className="max-w mx-auto flex flex-row justify-between cursor-pointer hover:bg-gray-200 p-6 bg-white rounded-lg shadow-md mt-4" onClick={ ()=> props.setSelectedJob(props.job)}>
      <div className="flex-shrink-0">
          <img className="h-16 w-16 rounded" src={props.job.logo_url} alt="Company Logo" />
      </div>
      <div className="flex flex-col w-full ml-6 pt-1 self-start">
        <p className="text-xs text-gray-600 flex items-center">
          <i className="material-icons text-xs ">room</i> { props.job.remote ? `Remote - ` : `` } { `${props.job.city}/${props.job.country}` }
        </p>
        <h4 className="text-xl text-black leading-tight">
          { props.job.title }
          <span className="text-gob-cyan"> { props.job.modality } </span>
        </h4>
        <span className="text-base text-gray-700 leading-normal">
        { props.job.company.name } | <span className="text-sm text-gob-red font-bold p-1 bg-gray-200 rounded" > $ { props.job.salary }</span>
        </span>
      </div>
      <div className="ml-6 flex flex-col items-stretch justify-center">
        <div className="w-20 h-12 ">
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
            <i className="material-icons text-xs text-gray-500 ">favorite_border</i>
        </button>
        {/* <button className="bg-blue-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
            <i className="material-icons text-xs text-gob-red ">favorite</i>
        </button> */}
        </div>
      </div>
    </div>
  );
};

export default JobCard;
