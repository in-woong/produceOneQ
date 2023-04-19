import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BuyPage from './pages/BuyPage';
import FundPage from './pages/FundPage';
import FundSelectPage from './pages/FundSelectPage';
import MainPage from './pages/MainPage';
import SellPage from './pages/SellPage';
import SplashPage from './pages/SplashPage';
import TradingPage from './pages/TrandingPage';
import WalletPage from './pages/WalletPage';
import DetailPage from './pages/DetailPage';
import WalletPageNoNY from './pages/WalletPageNoNY';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/loading' element={<SplashPage />} />
        <Route path='/' element={<MainPage />} />
        <Route path='/fund' element={<FundPage />} />
        <Route path='/fund/:id' element={<FundSelectPage />} />
        <Route path='/wallet' element={<WalletPage />} />
        <Route path='/walletnn' element={<WalletPageNoNY />} />
        <Route path='/trade/:id' element={<TradingPage />} />
        <Route path='/buy' element={<BuyPage />} />
        <Route path='/sell' element={<SellPage />} />
        <Route path='/detail' element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
