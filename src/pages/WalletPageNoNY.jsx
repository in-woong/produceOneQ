import Footer from '../components/Footer';
import Header from '../components/Header';
import Token from '../components/Token';

export default function WalletPageNoNY() {
  return (
    <>
      <Header />
      <img src='/img/wallet.png' alt='wallet' />
      <Token
        name='장원영'
        count='3'
        total='2,380,480'
        minus='-53,730(3.2%)'
        icon={'momoIcon'}
      />
      <Token
        name='김채원'
        count='8'
        total='1,180,048'
        plus='+73,050(5.5%)'
        icon={'snIcon'}
      />
      <Token
        name='지 수'
        count='11'
        total='380,480'
        minus='-3,050(5.5%)'
        icon={'zwIcon'}
      />
      <img src='/img/walletTwo.png' alt='walletTwo' />
      <Footer />
    </>
  );
}
