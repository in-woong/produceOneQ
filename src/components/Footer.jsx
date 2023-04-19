import { faHouse, faRightLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Footer() {
  return (
    <footer className='absolute h-16 text-xs bottom-0 w-full grid grid-cols-6  border-t border-subTwo'>
      <div className='flex justify-center items-center'>
        <span className='text-center text-subTwo'>
          <FontAwesomeIcon icon={faHouse} className='text-subTwo' />
          <br />홈
        </span>
      </div>
      <div className='flex justify-center items-center'>
        <span className='text-center'>
          내
          <br /> 지갑
        </span>
      </div>
      <div className='flex justify-center items-center'>
        <span className='text-center'>
          관심
          <br /> 종목
        </span>
      </div>
      <div className='flex justify-center items-center'>
        <span className='text-center'>
          주식 <br />
          현재가
        </span>
      </div>
      <div className='flex justify-center items-center'>
        <span>
          주식 <br /> 주문
        </span>
      </div>
      <div className='flex justify-center items-center'>
        <FontAwesomeIcon icon={faRightLong} className='text-subTwo text-lg' />
      </div>
    </footer>
  );
}
