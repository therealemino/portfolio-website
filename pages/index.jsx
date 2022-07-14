import React, { useState,useRef,useEffect } from 'react';
import Jumbotron from "../components/Jumbotron";
import About from '../components/About';
import Resume from '../components/Resume/Resume';
import Portfolio from '../components/Portfolio/Portfolio';
import AOS from 'aos'
import 'aos/dist/aos.css'

function App() {
  useEffect(() => {
    AOS.init({
      disable: 'mobile'
    })
  })
  const [darkMode, setDarkMode] = useState(false);

  function changeDarkMode() {
    const root = document.documentElement
    root.classList.toggle('dark')
  }


  return (
    <div className="App">
      <div className="bg-whitish-green md:bg-whitish-blue dark:bg-brownish-purple relative text-dark-green md:text-dark-blue dark:text-gray-300 font-montserrat">
        <Jumbotron darkMode={darkMode} />
        <About darkMode={darkMode} />
        <Resume />
        <Portfolio />
      </div>
    </div>
  );
}

export default App;
