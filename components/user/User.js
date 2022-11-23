import { useSession, signIn, signOut } from 'next-auth/react';
import Image from 'next/image';
export default function User() {
  const { data: session } = useSession();
  if (session) {
    console.log(session);
    return (
      <>
        <img
          onClick={signOut}
          src={session.user.image}
          alt='user-image'
          className='h-10 w-10 rounded-full hover:bg-gray-200 cursor-pointer p-1'
        />
      </>
    );
  }
  return (
    <button
      className='bg-blue-500 px-6 py-2 text-white font-medium rounded-md hover:bg-blue-700 transition-all hover:shadow-md'
      onClick={signIn}
    >
      Sign In
    </button>
  );
}
