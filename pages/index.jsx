import React, { useState, useEffect } from "react";
import Jumbotron from "../components/Jumbotron";
import About from "../components/About";
import Building from "../components/Building";
import Experience from "../components/Experience";
import AOS from "aos";
import "aos/dist/aos.css";
import Interests from "../components/Interests";
import { meta, PROFILES, SITE_URL } from "../utils/meta";
import Seo from "../components/Seo";
import JsonLd, { personSchema } from "../components/JsonLd";
import Playlists from "../components/Playlists";
import Writing from "../components/Writing";
import { createClient } from "../prismicio";
import { getPlaylists } from "../utils/spotify";

/* Three most recent posts for the Writing section, plus the Spotify playlists.
   Both are wrapped on purpose: the homepage is statically generated, so an
   unreachable Prismic or Spotify would otherwise fail the whole build. Prismic
   failing renders no Writing section; Spotify failing falls back to the
   committed snapshot inside getPlaylists(). Either way ISR picks up the real
   data on the next revalidation, and neither can take the other down. */
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

  const playlists = await getPlaylists();

  return { props: { articles, playlists }, revalidate: 3600 };
}

function App({ articles, playlists }) {
  useEffect(() => {
    AOS.init({
      disable: "mobile",
    });
  }, []);

  return (
    <>
      <Seo
        title="Ejei-Okeke Emmanuel — Product & Engineering Lead, Fintech and Payments"
        description="Product lead and senior engineer building payment routing, identity verification and commerce infrastructure. Case studies, ventures and writing."
        path="/"
      />
      <JsonLd
        data={personSchema({
          siteUrl: SITE_URL,
          profiles: PROFILES,
          image: meta.img,
        })}
      />
      <div className="App">
        <div className="bg-paper dark:bg-brown-950 relative text-dark-brown dark:text-gray-300 font-display overflow-x-hidden">
          <Jumbotron />
          <About />
          <Building />
          <Experience />
          <Writing articles={articles} />
          <Interests />
          <Playlists playlists={playlists} />
        </div>
      </div>
    </>
  );
}

export default App;
