
import './App.css';
import Header from './component/Header';
import Login from './component/Login';
import Register from './component/Register';
import { Routes, Route } from "react-router-dom"

import NewItem from './component/NewItem';
import Section from './component/Section';
import Order from './component/Order';
import Thankyou from './component/Thankyou';
import Footer from './component/Footer';



function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path='/register' element={<Register />} />


        <Route path="/Section" element={<Section />} />
        <Route path='/newitem' element={<NewItem />} />
        <Route path="/order" element={<Order />} />
        <Route path='/Thankyou' element={<Thankyou />} />



      </Routes>

    </>
  );
}

export default App;
