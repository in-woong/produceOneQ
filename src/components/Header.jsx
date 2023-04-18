import {
  faBell,
  faBellSlash,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className='bg-white'>
      <nav
        className='mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8'
        aria-label='Global'
      >
        <div className='flex lg:flex-1'>
          <span className='sr-only'>Your Company</span>
          <img
            className='h-8 w-auto'
            src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600'
            alt=''
          />
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
