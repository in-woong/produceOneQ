import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className='bg-white pt-2'>
      <nav
        className='mx-auto flex max-w-7xl items-center justify-between p-2'
        aria-label='Global'
      >
        <div className='flex lg:flex-1'>
          <span className='sr-only'>Your Company</span>
          <img className='h-12 w-auto' src='/img/logo.png' alt='logo' />
        </div>

        <div className='flex space-x-5'>
          <Link to='/' className='text-lg'>
            <FontAwesomeIcon icon={faBell} />
          </Link>
          <Link to='/' className='text-lg'>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </Link>
        </div>
      </nav>
    </header>
  );
}
