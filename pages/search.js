import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import ImageResult from '../components/image/ImageResult';
import SearchHeader from '../components/searchHeader/SearchHeader';
import SearchResults from '../components/searchResults/SearchResults';

export default function search({ results }) {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>Search Page</title>
      </Head>
      {/* search header */}
      <SearchHeader></SearchHeader>
      {/* search image and web result */}
      {router.query.searchType === 'image' ? (
        <ImageResult results={results} />
      ) : (
        <SearchResults results={results} />
      )}
    </div>
  );
}

export async function getServerSideProps(context) {
  const startIndex = context.query.start || '1';
  const data = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${
      process.env.CX_KEY
    }&q=${context.query.term}${
      context.query.searchType && '&searchType=image'
    }&start=${startIndex}`
  ).then((response) => response.json());
  return {
    props: {
      results: data,
    },
  };
}
