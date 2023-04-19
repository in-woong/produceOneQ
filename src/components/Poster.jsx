import { Link } from 'react-router-dom';

export default function Poster({ name, age, role, height, poster }) {
  return (
    <Link
      to={`/trade/${name}`}
      className='w-[65px] flex flex-col items-center justify-center'
    >
      <div
        className='bg-local place-items-center bg-cover bg-center rounded-sm w-[50px] h-[86px]'
        style={{ backgroundImage: `url(/img/members/${poster}.png)` }}
      />
      <span className='font-semibold text-xs'>
        {name}({age})
      </span>
      <span className=' text-subTwo font-semibold' style={{ fontSize: '10px' }}>
        담당:{role}
      </span>
      <span className='text-subTwo font-semibold' style={{ fontSize: '10px' }}>
        키:{height}cm
      </span>
    </Link>
  );
}
