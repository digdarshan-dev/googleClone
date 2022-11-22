import User from '../user/User';

export default function Header() {
  return (
    <header className='flex justify-between p-5 text-sm text-gray-700'>
      <div className='flex space-x-4 items-center'>
        <p className='links'>About</p>
        <p className='links'>Store</p>
      </div>
      <div className='flex space-x-4 items-center'>
        <p className='links'>Gamil</p>
        <p className='links'>Images</p>
        <User />
      </div>
    </header>
  );
}
