import React from 'react';
import Option from './Option';
import { SearchIcon, PhotographIcon } from '@heroicons/react/outline';
import { useRouter } from 'next/router';
export default function SearchHeaderOption() {
  const router = useRouter();
  return (
    <div className='flex space-x-8 cursor-pointer select-none w-full mx-auto justify-center text-sm text-gray-700 lg:pl-52 lg:justify-start border-b whitespace-nowrap'>
      <Option
        title='All'
        Icon={SearchIcon}
        selected={router.query.searchType === '' || !router.query.searchType}
      />
      <Option
        title='Images'
        Icon={PhotographIcon}
        selected={router.query.searchType === 'image'}
      />
    </div>
  );
}
