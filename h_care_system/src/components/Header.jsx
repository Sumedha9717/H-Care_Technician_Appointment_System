import React from 'react';
import { assets } from '../assets/assets_frontend/assets';

const Header = () => {
  return (
    <div className="relative">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={assets.bg_main_1} // Replace with your image path
          alt="Background"
          className="w-full h-full object-cover rounded-lg"
        />
        <div className="absolute inset-0 bg-blue-900/10 rounded-lg"></div> {/* Adjust opacity (60%) */}
      </div>

      {/* Content Container */}
      <div className="relative flex flex-col md:flex-row flex-wrap px-6 md:px-10 lg:px-20 z-10">
        {/* Left Side Content */}
        <div className="md:w-1/2 flex flex-col items-start gap-6 py-10 m-auto md:py-[10vw] md:mb-[-30px]">
          <p className="text-3xl md:text-4xl lg:text-5xl text-blue-700 font-semibold leading-tight md:leading-tight lg:leading-tight">
            Book Appointment <br /> With Trusted Technicians
          </p>
          
          <div className="flex flex-col md:flex-row items-center gap-3 text-indigo-800 text-sm font-light mb-4">
            <img className="w-28" src={assets.group_profiles} alt="Trusted Professionals" />
            <p className="mb-4 md:mb-0 font-semibold">
              Get it fixed, and get on with your day. We make it simple to schedule service with highly-rated,
              <br className="hidden sm:block" /> background-checked technicians. Expert help is just a few clicks away.
            </p>
          </div>
          
          <a 
            href="#Speciality" 
            className="inline-flex items-center gap-2 bg-blue-700 px-6 py-3 rounded-full text-white text-sm w-fit hover:scale-105 transition-all duration-300"
          >
            Book Appointment <img className="w-3" src={assets.arrow_icon} alt="" />
          </a>
        </div>

        {/* Right Side Image */}
        <div className="md:w-1/2 relative">
          {/* <img 
            className="w-full md:absolute bottom-0 h-auto rounded-lg" 
            src={assets.header_img} 
            alt="Technician working" 
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Header;