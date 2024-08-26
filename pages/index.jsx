import React, { useState, useRef, useEffect } from "react";
import Head from "next/head";
import Jumbotron from "../components/Jumbotron";
import About from "../components/About";
import Resume from "../components/Resume/Resume";
import Portfolio from "../components/Portfolio/Portfolio";
import AOS from "aos";
import "aos/dist/aos.css";
import Interests from "../components/Interests";
import { meta } from "../utils/meta";
import Playlists from "../components/Playlists";
import axios from "axios";

function App() {
  useEffect(() => {
    AOS.init({
      disable: "mobile",
    });
  }, []);

  return (
    <>
      <Head>
        {/* <!-- Primary Meta Tags --> */}
        <title>Ejei-Okeke Emmanuel. Personal Profile</title>
        <meta name="title" content={meta.title} />
        <meta name="description" content={meta.desc} />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={meta.url} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.desc} />
        <meta property="og:image" content={meta.img} />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={meta.url} />
        <meta property="twitter:title" content={meta.title} />
        <meta property="twitter:description" content={meta.desc} />
        <meta property="twitter:image" content={meta.img} />
      </Head>
      <div className="App">
        <div className="bg-white dark:bg-brown-950 relative text-zinc-800 dark:text-gray-300 font-display overflow-x-hidden">
          <Jumbotron />
          <About />
          <Resume />
          <Portfolio />
          <Interests />
          <Playlists />
        </div>
      </div>
    </>
  );
}

export default App;
