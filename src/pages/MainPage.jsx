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
        <h1>MainPage</h1>
        <Footer />
      </div>
      <Modal open={open} setOpen={setOpen} />
    </>
  );
}
