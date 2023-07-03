
import React from 'react'
import NavbarComponent from './component/header/NavbarComponent';
import Style from './assets/css/style_main.module.css';
import { BrowserRouter, Link, Route, Routes, useRoutes } from 'react-router-dom';
import Home from './pages/home'
import About from './pages/about'
import AllThemes from './pages/Alltheme';
import Order from './pages/Order';
import Contact from './pages/Contact-us';
import Services from './pages/services';

function App() {
   return (
    <div>
      <NavbarComponent />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about/' element={<About />}></Route>
          <Route path='/allTheme/' element={<AllThemes />}></Route>
          <Route path='/services/' element={<Services />}></Route>
          <Route path='/order/' element={<Order />}></Route>
          <Route path='/contact/' element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
