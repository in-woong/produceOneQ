import { Fragment, useRef } from 'react';
import { Dialog, Transition } from '@headlessui/react';

import { Link } from 'react-router-dom';

export default function BuyModal({ open, setOpen }) {
  const cancelButtonRef = useRef(null);
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as='div'
        className='relative z-10'
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 transition-opacity' />
        </Transition.Child>

        <div className='fixed inset-0 overflow-y-auto bg-gray bg-opacity-70'>
          <div className='flex min-h-full items-end justify-center w-screen text-center'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
              enterTo='opacity-100 translate-y-0 sm:scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 translate-y-0 sm:scale-100'
              leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            >
              <Dialog.Panel className='relative pb-8 transform flex flex-col justify-center items-center bg-white opacity-100 overflow-hidden rounded-xl rounded-b-none w-screen transition-all'>
                <div className=' flex flex-col space-y-4 mb-8 items-center mt-8'>
                  <img
                    className='w-24 h-24'
                    src='/img/members/nyIcon.png'
                    alt='logo'
                  />
                  <span className='text-2xl '> 나연 3조각 판매</span>
                </div>
                <div className='text-gray text-lg w-2/3 flex flex-col space-y-8 items-center'>
                  <div className='w-full flex justify-between'>
                    <span>1조각 희망 가격</span>
                    <span>365, 993원</span>
                  </div>
                  <div className='w-full flex justify-between'>
                    <span>예상 수수료</span>
                    <span>20원</span>
                  </div>
                  <div className='w-full flex justify-between'>
                    <span>총 주문 금액</span>
                    <span>366, 113원</span>
                  </div>
                </div>
                <div className='flex w-full mt-8 space-x-4 px-4 justify-between'>
                  <button
                    className='inline-flex flex-1 justify-center rounded-lg bg-subOne px-3 py-3 text-lg font-semibold text-gray-900 shadow-md hover:bg-gray-50 '
                    onClick={handleClick}
                  >
                    취소하기
                  </button>
                  <Link
                    to='/walletnn'
                    className='inline-flex flex-1 justify-center rounded-lg bg-main text-white px-3 py-3 text-lg font-semibold text-gray-900 shadow-md hover:bg-gray-50'
                  >
                    {' '}
                    판매하기
                  </Link>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
