import Image from 'next/image';
import React, { useRef } from 'react';
import logo from '../../assets/img/logo.webp';
import { useRouter } from 'next/router';
import { MicrophoneIcon, SearchIcon, XIcon } from '@heroicons/react/solid';
import User from '../user/User';
export default function SearchHeader() {
  const router = useRouter();
  const searchInputRef = useRef(null);
  const search = (e) => {
    e.preventDefault();
    if (!searchInputRef.current.value.trim()) return;
    router.push(`/search?query=${searchInputRef.current.value.trim()}`);
  };
  return (
    <header className='stick top-0 bg-white'>
      <div className='flex w-full p-6 items-center'>
        <Image
          src={logo}
          width={120}
          height={40}
          alt='google-logo'
          objectFit='contain'
          className='hover:cursor-pointer'
          onClick={() => router.push('/')}
        />
        <form
          action=''
          className='flex border border-gray-200 rounded-full shadow-lg px-6 py-3 mr-5 flex-grow max-w-3xl items-center'
        >
          <input
            type='text'
            defaultValue={router.query.term}
            ref={searchInputRef}
            className='w-full focus:outline-none'
          />
          <XIcon
            className='h-7 text-gray-500 cursor-pointer mr-3'
            onClick={() => (searchInputRef.current.value = null)}
          />
          <MicrophoneIcon className='h-6 hidden sm:inline-flex text-blue-500 pl-4 border-l-2 border-gray-400 mr-3' />
          <SearchIcon className='h-6 hidden sm:inline-flex text-blue-500 ' />
          <button type='submit' onClick={search} hidden></button>
        </form>
        <User className='ml-auto' />
      </div>
    </header>
  );
}
