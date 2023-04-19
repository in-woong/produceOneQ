import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

export default function TradingPage() {
  return (
    <>
      <img className='mt-10' src='/img/trade.png' alt='trade' />
      <div className='flex mt-8 space-x-4 px-4 justify-between'>
        <Link
          to='/sell'
          className='inline-flex flex-1 justify-center rounded-lg bg-subOne px-3 py-3 text-lg font-semibold text-gray-900 shadow-md hover:bg-gray-50 '
        >
          {' '}
          판매하기
        </Link>
        <Link
          to='/buy'
          className='inline-flex flex-1 justify-center rounded-lg bg-main text-white px-3 py-3 text-lg font-semibold text-gray-900 shadow-md hover:bg-gray-50'
        >
          {' '}
          구매하기
        </Link>
      </div>
      <Footer />
    </>
  );
}
