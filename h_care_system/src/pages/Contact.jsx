import React from 'react'
import { assets } from '../assets/assets_frontend/assets';

const Contact = () => {
  return (
    <div>
        
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>Contact <span className='text-gray-700 font-semibold'>Us</span></p>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
        <img className='w-full md:max-w-[360px]' src={assets.contact_image} alt="" />

      <div className='flex flex-col justify-center items-start gap-6'>
        <p className='font-semibold text-lg text-gray-600'>Our Showroom</p>
        <p className='text-gray-500'>Hemax Computers(PVT)Ltd,<br/> No120.Kandy Road, Kurunegala</p>
        <p className='text-gray-500'>Tell: 070 3838300<br/>Email:HemaxComputers@gmail.com</p>
        <p className='font-semibold text-lg text-gray-600'>Careers at Hemax Computers</p>
        <p className='text-gray-500'>Learn more about our team and job openings</p>
        <button className='border border-black px-8 py-4 text-sm hover:bg-blue-800 hover:text-white transition-all duration-500'>Explore jobs</button>
      </div>

      </div>
     

    </div>
  );
}

export default Contact;