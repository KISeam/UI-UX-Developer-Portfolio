import React from 'react'

const Preloader = () => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-gray-100 z-[9999]">
      <div className="w-screen h-screen flex flex-wrap items-center justify-center overflow-hidden">
        <div className="dtr-loader">Loading...</div>
      </div>
    </div>
  );
};

export default Preloader;