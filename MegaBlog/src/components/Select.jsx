import React, { useId } from "react";

function Select({ options, label, clssName, ...props }, ref) {
  const id = useId();
  return (
    <div className="w-full flex flex-col">
      {label && <label htmlFor={id} className=""></label>}
      <select
        {...props}
        id={id}
        ref={ref}
        className={`px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 ${clssName}`}
      >{options?.map((option)=>(
        <option key={option} value={option}>{option}</option>
      ))}</select>
    </div>
  );
}

export default React.forwardRef(Select);
