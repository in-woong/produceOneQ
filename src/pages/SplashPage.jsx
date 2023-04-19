import { Link } from 'react-router-dom';

export default function SplashPage() {
  return (
    <div className='h-screen w-screen flex justify-center items-center bg-subOne'>
      <Link to='/'>
        <img className='h-28' alt='logo' src='/img/logo.png' />
      </Link>
    </div>
  );
}
