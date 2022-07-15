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
        <title>Ejei-Okeke Emmanuel. Personal Profile</title>
        {/* <!-- Primary Meta Tags --> */}
        <title>Ejei-Okeke Emmanuel. Personal Profile</title>
        <meta name="title" content="Ejei-Okeke Emmanuel. Personal Profile" />
        <meta name="description" content="Personal profile of Ejei-Okeke Emmanuel. Created using react" />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ejeiokekeemmanuel.vercel.app/" />
        <meta property="og:title" content="Ejei-Okeke Emmanuel. Personal Profile" />
        <meta property="og:description" content="Personal profile of Ejei-Okeke Emmanuel. Created using react" />
        <meta property="og:image" content="https://ejeiokekeemmanuel.vercel.app/emino-image.jpg" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://ejeiokekeemmanuel.vercel.app/" />
        <meta property="twitter:title" content="Ejei-Okeke Emmanuel. Personal Profile" />
        <meta property="twitter:description" content="Personal profile of Ejei-Okeke Emmanuel. Created using react" />
        <meta property="twitter:image" content="https://ejeiokekeemmanuel.vercel.app/emino-image.jpg" />

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