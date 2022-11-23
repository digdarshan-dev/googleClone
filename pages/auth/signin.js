import React from 'react';
import Image from 'next/image';
import Header from '../../components/header/Header';
import { getProviders, signIn } from 'next-auth/react';
import logo from '../../assets/img/logo.webp';
export default function signin({ providers }) {
  return (
    <>
      <Header />
      <div className=''>
        {Object.values(providers).map((provider) => (
          <div key={provider.name} className='flex flex-col items-center mt-40'>
            <Image alt='logo' src={logo} className='w-52 object-cover' />
            <p className='my-10 text-center italic'>
              This website is created for learning purposes.
            </p>
            <button
              onClick={() => {
                signIn(provider.id, { callbackUrl: '/' });
              }}
              className='bg-red-400 text-white p-3 rounded-lg hover:bg-red-500'
            >
              Sign in with {provider.name}
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
