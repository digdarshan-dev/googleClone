import React from 'react';
import Parser from 'html-react-parser';
import Pagination from '../pagination/Pagination';
export default function SearchResults({ results }) {
  console.log(results);
  return (
    <div className='w-full mx-auto px-3 sm:pl-[5%] md:pl-[40%] lg:pl-[16%]'>
      <p className='text-gray-600 mb-5 mt-3 text-sm'>
        About {results.searchInformation.formattedTotalResults} results (
        {results.searchInformation.formattedSearchTime}) seconds
      </p>
      {results.items.map((result) => (
        <div className='mt-5 max-w-xl' key={result.link}>
          <div className='group'>
            <a className='text-sm truncate' href={result.link}>
              {result.formattedUrl}
            </a>
            <a
              className='group-hover:underline decoration-blue-800'
              href={result.link}
            >
              <h2 className='truncate text-lg font-medium text-blue-800'>
                {result.title}
              </h2>
            </a>
          </div>
          <p className='text-gray-600'>{Parser(result.htmlSnippet)}</p>
        </div>
      ))}
      <Pagination />
    </div>
  );
}
