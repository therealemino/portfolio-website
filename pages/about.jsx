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
                (air-mee-know). I'm a passionate web developer specializing in
                creating dynamic, user-friendly, and visually stunning
                applications. My expertise lies in transforming design concepts
                into fully functional, responsive websites that seamlessly adapt
                to various devices.
              </p>
              <p className="mb-4">
                I am dedicated to crafting high-quality code that is both
                efficient and maintainable, ensuring optimal performance and
                scalability. My experience with a variety of web technologies
                and frameworks enables me to deliver innovative solutions that
                meet the unique needs of each project.
              </p>
              <p className="mb-4">
                I love staying up-to-date with the ever-evolving tech landscape.
                It's a constant pursuit. From emerging web technologies to AI
                and blockchain innovations, I'm always eager to learn and
                experiment. I also love following the latest startup trends and
                exploring potential business ventures.
              </p>
              <p className="mb-4">
                I'm always open to discussing new business opportunities and
                collaborating on projects that align with my interests. I
                believe software should ultimately serve humanity, and I'm
                particularly drawn to initiatives that leverage technology to
                improve people's lives. Whether it's developing AI for
                healthcare applications, enhancing human-computer interaction,
                or creating software solutions to improve financial well-being,
                I'm eager to contribute to these endeavors. Feel free to reach
                out if you have any opportunities or ideas to share.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
