import React, { useState, useRef, useEffect } from "react";
import Head from "next/head";
import AOS from "aos";
import "aos/dist/aos.css";
import { meta } from "../utils/meta";

function App() {
  useEffect(() => {
    AOS.init({
      disable: "mobile",
    });
  });

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
      <main className="App">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="lg:hidden text-center font-semibold text-2xl md:text-4xl mb-5">
            About Me
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center gap-6">
            <img
              data-aos="fade-in"
              src="https://res.cloudinary.com/emino/image/upload/v1724607547/emino/interests.jpg"
              className="rounded-md"
            />
            <div>
              <h1 className="hidden lg:block text-center font-semibold text-2xl md:text-4xl mb-5">
                About Me
              </h1>
              <p className="mb-4">
                Hi, I'm Ejei-Okeke Emmanuel, but just call me Emino
                (air-me-know). I live somewhere between product and engineering.
                I started as an engineer, with a B.Eng in Electronic
                Engineering, then years writing frontend code, before moving
                into product leadership. I've kept one foot in each since.
              </p>
              <p className="mb-4">
                I have an MBA in Fintech & Blockchain from Nexford, (came out
                with a 4.00, which I'm still a little proud of). It sharpened
                how I think about the business side of things: unit economics,
                regulation, go-to-market, leadership, process improvement,
                business operations etc. It also gave me enough distance from
                the code to lead engineering teams properly, rather than just
                being another contributor on them.
              </p>
              <p className="mb-4">
                I love staying up-to-date with the ever-evolving tech landscape.
                It's a constant pursuit. From emerging web technologies to AI
                and blockchain innovations, I'm always eager to learn and
                experiment. I also love following the latest startup trends and
                exploring potential business ventures.
              </p>
              <p className="mb-4">
                I'm always open to discussing new opportunities and
                collaborating on projects that align with my interests. I
                believe software should ultimately serve humanity, and I'm
                particularly drawn to initiatives that leverage technology to
                improve people's lives. Feel free to reach out if you have any
                opportunities or ideas to share.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
