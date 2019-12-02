import React from "react";

const Alert = ({ title, text }) => {

  return (
    <div className="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3" role="alert">
        <p className="font-bold"> {title} </p>
        <p className="text-sm"> { text } </p>
    </div>
  )
}

export default Alert;
