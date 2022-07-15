import React, { useState,useRef,useEffect } from 'react';
import Head from 'next/head'
import Script from 'next/script'

import Navbar from "../components/Navbar";
import Footer from '../components/Footer';


const DefaultLayout = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false)
  
  function changeDarkMode() {//adds the dark class to the html tag (required for the dark-mode styling to work in tailwind)
    const root = document.documentElement
    root.classList.toggle('dark')
  }

  function toggleDarkMode () {
    setDarkMode (!darkMode)
    changeDarkMode()
  }  
  
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Personal profile of Ejei-Okeke Emmanuel. Created using react"
        />
        <meta name="twitter:card" content="summary_large_image"></meta>
        <meta name="twitter:site" content="@therealemino" />
        <meta name="twitter:creator" content="@therealemino" />
        <meta name="twitter:title" content="Ejei-Okeke Emmanuel" />
        <meta name="twitter:description" content="Personal profile of Ejei-Okeke Emmanuel. Software Developer." />
        <meta name="twitter:image" content="https://avatars.githubusercontent.com/u/67398035?v=4" />
        <meta property="og:url" content="https://therealemino.vercel.app/" />
        <meta property="og:title" content="Ejei-Okeke Emmanuel. Personal profile" />
        <meta property="og:description" content="Personal profile of Ejei-Okeke Emmanuel. Created using react..." />
        <meta property="og:image" content="%PUBLIC_URL%/emino-image.jpg" />
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </Head>
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