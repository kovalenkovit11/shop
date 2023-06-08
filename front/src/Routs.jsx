import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Catalog from './pages/Catalog/Catalog';
// import Product from './pages/Product/Product';
import Footer from './components/Footer/Footer';
import OpenCard from './components/OpenCard/OpenCard';
// import NotFound from './pages/NotFound/NotFound';
import Modal from './components/Modal/Modal';


const Routs = ()=> {
  const [selected, setSelected] = useState('')
  const [openModal, setOpenModal] = useState(false)

  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Main/>} />
        <Route exact path="/products" element={<Catalog openModal={openModal} setOpenModal={setOpenModal} selected={selected} setSelected={setSelected}/>} />
        <Route exact path="/product/:id" element={<OpenCard openModal={openModal} setOpenModal={setOpenModal}/>} />
        {/* <Route path="/catalog/:productId" component={Product} />
        <Route component={NotFound} /> */}
      </Routes>
      <Footer />
      <Modal openModal={openModal} setOpenModal={setOpenModal}/>
    </Router>
  );
}

export default Routs;
