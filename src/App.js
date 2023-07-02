
import React from 'react'
import Home from './component/home';
import NavbarComponent from './component/header/NavbarComponent';
import Style from './assets/css/style_main.module.css';

function App() {
  return (
      <div>
        <NavbarComponent />
        <Home />
      </div>
  );
}

export default App;
