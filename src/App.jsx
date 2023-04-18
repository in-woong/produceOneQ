import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FundPage from './pages/FundPage';
import FundSelectPage from './pages/FundSelectPage';
import MainPage from './pages/MainPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/fund' element={<FundPage />} />
        <Route path='/fund/:id' element={<FundSelectPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
