import Head from 'next/head';
import React from 'react';
import SearchHeader from '../components/searchHeader/SearchHeader';

export default function search() {
  return (
    <div>
      <Head>
        <title>Search page</title>
      </Head>
      {/* search header */}
      <SearchHeader></SearchHeader>
      {/* search result */}
    </div>
  );
}
