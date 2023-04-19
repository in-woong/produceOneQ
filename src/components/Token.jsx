import { Link } from 'react-router-dom';

export default function Token({ name, count, total, plus, minus, icon }) {
  return (
    <Link to={`/trade/${name}`} className='px-4 mb-4 flex items-center'>
      <div className='pr-4 flex-2'>
        <img className='h-14' src={`/img/members/${icon}.png`} alt='avatar' />
      </div>
      <div className='flex flex-1 flex-col'>
        <span className='font-bold'>{name}</span>
        <span className='text-xs text-gray'>{count}조각</span>
      </div>
      <div className='w-1/2 flex justify-end flex-col'>
        <span className='text-end text-sm font-bold'>{total} 원</span>
        {plus && <span className='text-end text-xs text-font'>{plus}</span>}
        {minus && <span className='text-end text-xs text-blue'>{minus}</span>}
      </div>
    </Link>
  );
}
