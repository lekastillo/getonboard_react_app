import React from "react";

const FavoriteJobCard = ( props ) => {
  return (
    <div className="max-w mx-auto flex flex-row justify-between cursor-pointer hover:bg-gray-200 p-6 bg-white rounded-lg shadow-md mt-4">
      <div className="flex-shrink-0">
      <img className="h-16 w-16 rounded" src={props.job.logo_url} alt="Company Logo" />
      </div>
      <div className="flex flex-col w-full ml-6 pt-1 self-start">
        <h4 className="text-xl text-black leading-tight">
          {  props.job.title  }
        </h4>
      </div>
      <div className="ml-6 flex flex-col items-stretch justify-center">
        <div className="w-20 h-12 ">
        <button className="bg-gob-red hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center" onClick={ ()=> props.delete_favorite(props.job.job_id)}>
            <i className="material-icons text-gray-100 ">delete</i>
        </button>
        </div>
      </div>
    </div>
  );
};

export default FavoriteJobCard;
