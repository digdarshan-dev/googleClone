import Image from 'next/image';
import React from 'react';
import logo from '../../assets/img/logo.webp';
import { SearchIcon, MicrophoneIcon } from '@heroicons/react/solid';
export default function Body() {
  return (
    <>
      <form action='' className='flex flex-col items-center mt-30'>
        <Image
          src={logo}
          width={300}
          height={100}
          alt='google-logo'
          objectFit='cover'
        />
        <div className='flex w-full px-5 py-3 items-center mx-auto rounded-full max-w-[90%] border border-gray-200 sm:max-w-xl lg:max-w-2xl hover:shadow-lg focus-within:shadow-lg hover:cursor-pointer'>
          <SearchIcon className='h-5 text-gray-500 mr-3' />
          <input type='text' className='flex-grow focus:outline-none' />
          <MicrophoneIcon className='h-5 text-gray-500' />
        </div>
        <div className='flex space-x-4 mt-4 '>
          <button className='btn'>Google Search</button>
          <button className='btn'>I am feeling Lucky</button>
        </div>
      </form>
    </>
  );
}
