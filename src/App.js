
import React from 'react';
import './App.css';
import Header from './components/Header';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Shop from './components/Shop'
import Cart from './components/Cart';
import Footer from './components/Footer'
import 'font-awesome/css/font-awesome.min.css';

function App() {

  return (
  <div className='bg-gray-100 min-h-screen'>
    
    <BrowserRouter>
     <Header />
      <Routes>
        <Route path="/" element={<Shop/>}/>
        <Route path="shop" element={<Shop/>}/>
        <Route path="cart"  element={<Cart/>} />
      </Routes>
        <div className='container mx-auto'>
         <Link className='mr-2 py-2 px-3 bg-indigo-500 font-semibold hover:bg-indigo-600 text-sm text-white uppercase' to="/shop">Shop</Link>
         <Link className='mr-2 py-2 px-3 bg-indigo-500 font-semibold hover:bg-indigo-600 text-sm text-white uppercase' to="/cart">Cart</Link>
        </div>
    </BrowserRouter>
    <Footer />
    {/* {console.log(React.version)} */}
    
  </div>

  );
}

export default App;

