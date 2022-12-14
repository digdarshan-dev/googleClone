import React from 'react';
import { useRouter } from 'next/router';
export default function Option({ title, Icon, selected }) {
  const router = useRouter();
  const selectTab = (title) => {
    if (title) {
      router.push(
        `/search?term=${router.query.term}&searchType=${
          title === 'Images' ? 'image' : ''
        }`
      );
    }
  };
  return (
    <div
      onClick={() => {
        selectTab(title);
      }}
      className={`flex items-center pb-3 space-x-2 border-b-4 border-transparent hover:text-blue-500 cursor-pointer hover:border-blue-500 ${
        selected && 'text-blue-500 border-blue-500'
      }`}
    >
      <Icon className='h-6' />
      <p>{title}</p>
    </div>
  );
}
