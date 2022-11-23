import Image from 'next/image';
import React, { useRef } from 'react';
import logo from '../../assets/img/logo.webp';
import { SearchIcon, MicrophoneIcon } from '@heroicons/react/solid';
import { useRouter } from 'next/router';
export default function Body() {
  const router = useRouter();
  const searchInputRef = useRef(null);
  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;
    if (!term.trim()) return;
    router.push(`search?term=${term.trim()}&searchType=`);
  };
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
          <input
            ref={searchInputRef}
            type='text'
            className='flex-grow focus:outline-none'
          />
          <MicrophoneIcon className='h-5 text-gray-500' />
        </div>
        <div className='flex space-x-4 mt-4 '>
          <button onClick={search} className='btn'>
            Google Search
          </button>
          <button className='btn'>I am feeling Lucky</button>
        </div>
      </form>
    </>
  );
}
