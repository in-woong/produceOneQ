import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function FundPage() {
  return (
    <>
      <Header />
      <section className='w-full overflow-x-hidden'>
        <div class='container'>
          <div class='container'>
            <div
              className='bg-local bg-cover bg-center w-full h-96'
              style={{ backgroundImage: 'url(/img/posterTwoEyes.png)' }}
            ></div>
            <div className='m-6'>
              <span className='text-2xl font-semibold'>
                토큰증권공개(STO) 예정 공고
              </span>
              <div className='flex flex-col my-4'>
                <div className='flex h-10'>
                  <div className='flex items-center'>
                    <img
                      className='h-4'
                      src='/img/material-symbols_help.png'
                      alt=''
                    />
                    &nbsp;
                    <span className='text-font text-[14px]'>
                      어떻게 국민 프로듀서가 될 수 있나요?
                    </span>
                  </div>
                </div>
                <div className='flex  items-center mb-4'>
                  <span className='text-xl font-semibold'>그룹명:</span>&nbsp;
                  <span className='text-font text-2xl font-semibold'>
                    투아이즈(TWO EYES)
                  </span>
                </div>
                <div>
                  <p style={{ fontSize: '13px', fontWeight: '700' }}>
                    ◉ 공개 일자 : 2023년 4월 20일 16:00시 (KST)
                    <br />
                    ◉ 발행조각 수 : 1 멤버당 100,000 조각 (1,000원/1조각)
                    <br />
                    ◉ 총 발행액: 10억(=1억X10멤버)
                    <br />
                    ◉ 기획사 : JYD 엔터테인먼트
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Link
              to='/detail'
              className='inline-flex justify-center rounded-lg bg-font w-full text-white px-3 py-3 text-lg font-semibold text-gray-900 shadow-md hover:bg-gray-50'
            >
              멤버 상세 정보보러가기
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
