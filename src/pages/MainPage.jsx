import { useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Modal from '../components/Modal';

export default function MainPage() {
  const [open, setOpen] = useState(true);
  return (
    <>
      <div>
        <Header />
        <img src='/img/mainImage.png' alt='mainimage' />
        <Footer />
      </div>
      <Modal open={open} setOpen={setOpen} />
    </>
  );
}
