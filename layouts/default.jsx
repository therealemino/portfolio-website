import React, { useState,useRef,useEffect } from 'react';
import Head from 'next/head'
import Script from 'next/script'
import { GoogleAnalytics } from "nextjs-google-analytics";


import Navbar from "../components/Navbar";
import Footer from '../components/Footer';


const DefaultLayout = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true)

  function changeDarkMode() {//adds the dark class to the html tag (required for the dark-mode styling to work in tailwind)
    const root = document.documentElement
    root.classList.toggle('dark')
  }
  
  useEffect(() => {
    const root = document.documentElement
    if(!(root.classList.contains('dark'))) {
      root.classList.toggle('dark')
    }
  }, [])
  
  function toggleDarkMode () {
    setDarkMode (!darkMode)
    changeDarkMode()
  }  
  
  return (
    <>
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </Head>
      <GoogleAnalytics trackPageViews strategy="lazyOnload" />
      <Script src="https://use.fontawesome.com/6fb1445712.js"></Script>
      <Script src="https://code.iconify.design/2/2.2.1/iconify.min.js"></Script>
      <div className="content">
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          { children }
        <Footer />
      </div>
    </>
  );
}
 
export default DefaultLayout;