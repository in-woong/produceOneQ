import Footer from '../components/Footer';
import Header from '../components/Header';
import Poster from '../components/Poster';

export default function DetailPage() {
  return (
    <>
      <Header />
      <div className='px-4 pt-4'>
        <p className='font-semibold text-xl my-4'>
          <span className='text-font'>투아이즈</span>의 <br />
          미래 멤버들을 소개합니다!
        </p>
        <div className='bg-subOne w-full h-full p-4 gap-2 grid grid-cols-5 grid-rows-2 place-items-center rounded-lg'>
          <Poster
            name={'다현'}
            height={'158'}
            role={'서브보컬'}
            age={'23세'}
            poster={'PosterOne'}
          />
          <Poster
            name={'채영'}
            height={'157'}
            role={'서브보컬'}
            age={'22세'}
            poster={'PosterTwo'}
          />
          <Poster
            name={'미나'}
            height={'163'}
            role={'댄서'}
            age={'23세'}
            poster={'PosterThree'}
          />
          <Poster
            name={'모모'}
            height={'168'}
            role={'메인댄서'}
            age={'24세'}
            poster={'PosterFour'}
          />
          <Poster
            name={'사나'}
            height={'165'}
            role={'댄서'}
            age={'26세'}
            poster={'PosterFive'}
          />
          <Poster
            name={'쯔위'}
            height={'169'}
            role={'메인보컬'}
            age={'21세'}
            poster={'PosterSix'}
          />
          <Poster
            name={'정연'}
            height={'163'}
            role={'메인보컬'}
            age={'24세'}
            poster={'PosterSeven'}
          />
          <Poster
            name={'나연'}
            height={'168'}
            role={'메인보컬'}
            age={'28세'}
            poster={'PosterEight'}
          />
          <Poster
            name={'태연'}
            height={'163'}
            role={'메인보컬'}
            age={'21세'}
            poster={'PosterNine'}
          />
        </div>
        <div className='mt-8 mb-4'>
          <p className='font-bold text-xl'>
            멤버들의 매력을 더 살펴보고 싶으신가요?
          </p>
          <p className='font-bold text-xs text-gray'>
            다양한 매력이 매주 금요일 5시 넷플릭스에서 공개됩니다!
          </p>
        </div>
        <div
          className='bg-local place-items-center bg-cover bg-center w-full h-[168px]
        '
          style={{ backgroundImage: 'url(/img/netflixPoster.png)' }}
        ></div>
      </div>
      <Footer />
    </>
  );
}
