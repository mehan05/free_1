import React from "react";

const Animation = () => {
  return (
    <div className="flex items-center justify-center  bg-gray-100">
      <div className="bg-white border border-dashed border-blue-400 rounded-lg p-6 w-[90%] max-w-[320px] h-[380px] flex flex-col items-center justify-center">
        <img 
          src="/animation.gif" 
          alt="Processing Animation" 
          className="w-[200px] h-[200px] mb-3"
        />
        <div className="text-center text-gray-600 font-poppins font-bold text-[14px] leading-[22px]">
          <p>Thank you for proceeding.</p>
          <p>We're currently processing course</p>
          <p>details for verification.</p>
          <p className="mt-1 text-xs font-normal">(This process typically takes 24-48 hrs)</p>
        </div>
      </div>
    </div>
  );
};

export default Animation;
