import Head from 'next/head';
import React from 'react';
import SearchHeader from '../components/searchHeader/SearchHeader';
import SearchResults from '../components/searchResults/SearchResults';

export default function search({ results }) {
  return (
    <div>
      <Head>
        <title>Search Page</title>
      </Head>
      {/* search header */}
      <SearchHeader></SearchHeader>
      {/* search result */}
      <SearchResults results={results} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const data = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${
      process.env.CX_KEY
    }&q=${context.query.term}${context.query.searchType && '&searchType=image'}`
  ).then((response) => response.json());
  return {
    props: {
      results: data,
    },
  };
}
