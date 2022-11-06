import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Aboutus from './Components/Pages/Aboutus/Aboutus';
import Shop from './Components/Pages/Shop';
import Contacts from './Components/Pages/Contacts';

import logoFlowers from './images/logo.png';
import Cart from './Components/Cart/Cart';

function App() {
  return <Router>
      
    <nav>
    <div className='logo-div'>
      <img src={logoFlowers} alt="flowers" width="100px"/>
      </div>
      <Link to="/" className='nav-style'>About us</Link>
      <Link to="/shop" className='nav-style'>Shop</Link>
      <Link to="/contacts" className='nav-style'>Contacts</Link>
      <div className='cart-div'>
        <Link to="/cart"><Cart/></Link>
      </div>
      
 
    </nav>
    <Routes>
      <Route path="/" element={<Aboutus/>}/>
      <Route path="/shop" element={<Shop/>}/>
      <Route path="/contacts" element={<Contacts/>}/>
      <Route path="/cart" element={<Cart/>}/>
    </Routes>
  </Router>
}

export default App;
