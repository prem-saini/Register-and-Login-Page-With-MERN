
import './App.css';
import Header from './component/Header';
import Login from './component/Login';
import Register from './component/Register';
import { Routes, Route } from "react-router-dom"
import Main from './component/Main';


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/main' element={<Main />} />


      </Routes>
    </>
  );
}

export default App;
