
import React from 'react'
import NavbarComponent from './component/header/NavbarComponent';
import Style from './assets/css/style_main.module.css';
import { BrowserRouter, createBrowserRouter, Route, Routes ,RouterProvider} from 'react-router-dom';
import Home from './pages/home'
import About from './pages/about'
import AllThemes from './pages/Alltheme';
import Order from './pages/Order';
import Contact from './pages/Contact-us';
import Services from './pages/services';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home/>,
//   },
//   {
//     path: "/about/",
//     element: <About />,
//   },
//   {
//     path: "/allTheme/",
//     element: <AllThemes />,
//   },
//   {
//     path: "/services/",
//     element: <Services />,
//   },
//   {
//     path: "/order/",
//     element: <Order />,
//   },
//   {
//     path: "/contact/",
//     element: <Contact />,
//   },
// ]);

function App() {
   return (
    <div>
      <NavbarComponent />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about/' element={<About />}></Route>
          <Route path='/allTheme/' element={<AllThemes />}></Route>
          <Route path='/services/' element={<Services />}></Route>
          <Route path='/order/' element={<Order />}></Route>
          <Route path='/contact/' element={<Contact />}></Route>
        </Routes>
        {/* <BrowserRouter> <RouterProvider router={router} /> </BrowserRouter> */}
        
    </div>
  );
}

export default App;
