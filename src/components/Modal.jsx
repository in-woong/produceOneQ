import { Fragment, useRef } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquare } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';

export default function Modal({ open, setOpen }) {
  const cancelButtonRef = useRef(null);

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
          <div className='flex min-h-full items-center justify-center p-4 text-center'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
              enterTo='opacity-100 translate-y-0 sm:scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 translate-y-0 sm:scale-100'
              leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            >
              <Dialog.Panel className='relative transform bg-white opacity-100 overflow-hidden rounded-lg text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg'>
                <div className='bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4'>
                  <img src='/img/poster.png' alt='poster' />
                  <Link
                    to='/fund'
                    className=' bg-white flex justify-center items-center absolute top-[330px] left-[50px] bg-transparent  hover:bg-subTwo text-blue-700  hover:text-white py-2 px-14  rounded-xl'
                  >
                    <span className='text-xs text-font'>신청하러가기</span>
                  </Link>
                </div>
                <div className='bg-gray-50 space-x-2 px-2 py-3 flex '>
                  <button
                    to='/fund'
                    type='button'
                    className='inline-flex flex-4 justify-around items-center rounded-md px-3 py-2 text-sm font-semibold shadow-md hover:bg-subTwo'
                    onClick={() => setOpen(false)}
                  >
                    <FontAwesomeIcon icon={faSquare} />
                    &nbsp; 오늘 하루 보지 않기
                  </button>
                  <button
                    type='button'
                    className='inline-flex flex-1 justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto'
                    onClick={() => setOpen(false)}
                    ref={cancelButtonRef}
                  >
                    닫기
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
