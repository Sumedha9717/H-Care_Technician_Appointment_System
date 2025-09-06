import React from 'react'
import { assets } from '../assets/assets_frontend/assets';

const About_us = () => {
  return (
    <div>
        
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>About <span className='text-gray-700 font-medium'>Us</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed odio quidem autem nihil a totam voluptates inventore quia aliquam dolorem temporibus adipisci fuga, voluptatum expedita recusandae iste laboriosam voluptatibus rem.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium repellendus deserunt laborum autem quis impedit unde totam, voluptate sunt dicta quo minima odit eveniet suscipit fuga perspiciatis quidem libero eos.</p>
          <b className='text-gray-800'>Our Vision</b>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus consectetur facilis voluptate modi rem totam facere consequatur autem aperiam! Error blanditiis enim voluptatem minus quae? Incidunt velit cumque odio animi.</p>
        </div>
      </div>

      <div className='text-xl my-4'>
        <p>Why <span className='text-gray-700 font-semibold'>Choose Us</span></p>
      </div>

      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-blue-700 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Efficiency:</b>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit nulla impedit voluptate, magni facere fugit alias eligendi provident molestiae ipsam, voluptas nobis odit labore, ipsum quos odio id cupiditate assumenda!</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-blue-700 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Convenience:</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi molestiae error eius voluptates quasi expedita sint dolorum tempora esse eaque est, corrupti explicabo cum sunt consequatur? Animi amet quasi qui.</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-blue-700 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b >Personalization:</b>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita molestiae repellat, tenetur commodi corrupti fugiat eaque doloremque, architecto ut repudiandae dolore! Rem ex in explicabo dolorem, ab aperiam dicta corporis.</p>
        </div>

      </div>

    </div>
  );
}

export default About_us;