// import React from 'react'
import Image3 from "../assets/images/desktop-image-hero-3.jpg"

const Hero = () => {
  return (
    <div className="grid grid-cols-3">
      <div className="col-span-2">
        <div className="w-full h-full group relative bg-gray-700 parent-container   overflow-hidden">
          <img
            className="opacity-50 object-cover w-full h-full"
            src={Image3}
            alt="Image Picture"
          />
          <div className="absolute top-[50%] space-y-4 left-[50%] translate-x-[-50%] translate-y-[-50%]"></div>
        </div>
      </div>
      <div className="col-span-1"></div>
    </div>
  );
};

export default Hero;
