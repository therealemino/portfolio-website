import React, { useState, useRef, useEffect } from "react";
import Head from "next/head";
import Jumbotron from "../components/Jumbotron";
import About from "../components/About";
import Building from "../components/Building";
import Experience from "../components/Experience";
import AOS from "aos";
import "aos/dist/aos.css";
import Interests from "../components/Interests";
import { meta } from "../utils/meta";
import Playlists from "../components/Playlists";
import axios from "axios";
import Writing from "../components/Writing";
import { createClient } from "../prismicio";

/* Three most recent posts for the Writing section. Wrapped in try/catch on
   purpose: the homepage is statically generated, so an unreachable Prismic
   would otherwise fail the whole build. On failure the section renders
   nothing and ISR picks the posts up on the next revalidation. */
export async function getStaticProps({ previewData }) {
  let articles = [];

  try {
    const client = createClient({ previewData });
    const posts = await client.getAllByType("post");

    articles = posts
      .slice()
      .sort((a, b) => {
        const dateA = a.data.date || a.first_publication_date || "";
        const dateB = b.data.date || b.first_publication_date || "";
        return dateB.localeCompare(dateA);
      })
      .slice(0, 3);
  } catch (error) {
    console.warn("[index] could not load posts from Prismic:", error.message);
  }

  return { props: { articles }, revalidate: 3600 };
}

function App({ articles }) {
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
        <div className="bg-paper dark:bg-brown-950 relative text-dark-brown dark:text-gray-300 font-display overflow-x-hidden">
          <Jumbotron />
          <About />
          <Building />
          <Experience />
          <Writing articles={articles} />
          <Interests />
          <Playlists />
        </div>
      </div>
    </>
  );
}

export default App;
