import Link from 'next/link';
import User from '../user/User';
import Router, { useRouter } from 'next/router';
export default function Header() {
  const router = useRouter();
  return (
    <header className='flex justify-between p-5 text-sm text-gray-700'>
      <div className='flex space-x-4 items-center'>
        <Link href={`https://about.google/`}>
          <p className='links'>About</p>
        </Link>
        <Link href={`https://store.google.com/`}>
          <p className='links'>Store</p>
        </Link>
      </div>
      <div className='flex space-x-4 items-center'>
        <Link href={`https://mail.google.com/`}>
          <p className='links'>Gamil</p>
        </Link>

        <p
          onClick={() =>
            Router.push(
              `/search?term=${router.query.term || 'google'}&searchType=image`
            )
          }
          className='links'
        >
          Images
        </p>
        <User />
      </div>
    </header>
  );
}
