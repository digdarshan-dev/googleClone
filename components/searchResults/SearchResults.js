import React from 'react';

export default function SearchResults({ results }) {
  return (
    <div className='w-full mx-auto px-3 sm:pl-[5%] md:pl-[40%] lg:pl-[16%]'>
      <p className='text-gray-600 mb-5 mt-3 text-sm'>
        About {results.searchInformation.formattedTotalResults} results (
        {results.searchInformation.formattedSearchTime}) seconds
      </p>
    </div>
  );
}
