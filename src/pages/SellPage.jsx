import { faList } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import SellModal from '../components/SellModal';
import Footer from '../components/Footer';

export default function SellPage() {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <>
      <div className='flex h-screen flex-col justify-between pb-16'>
        <div>
          <img className='mt-10' src='/img/buyImage.png' alt='buy' />
          <input
            className='mx-6 focus:outline-none text-2xl font-semibold'
            type='text'
            placeholder='몇 주를 판매하시겠습니까'
          />
          <p className='text-gray text-sm mx-6'>최대 판매 가능한 조각 수: 3</p>
        </div>
        <div className='flex space-x-2 px-2 mb-4'>
          <div className='w-1/6 bg-subOne text-font inline-flex justify-center items-center rounded-lg  px-3 py-3 text-lg font-semibold text-gray-900 shadow-md hover:bg-gray-50'>
            <FontAwesomeIcon icon={faList} />
          </div>
          <button
            to='/sell'
            className='inline-flex flex-1 justify-center rounded-lg bg-main text-white px-3 py-3 text-lg font-semibold text-gray-900 shadow-md hover:bg-gray-50'
            onClick={handleClick}
          >
            판매하기
          </button>
        </div>
        <Footer />
      </div>
      <SellModal open={open} setOpen={setOpen} />
    </>
  );
}
