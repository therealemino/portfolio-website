import React from "react";
import Socials from "./Socials";
import Skills from "./Skills";

export default function About(props) {
  return (
    <div
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32"
      id="about"
      ref={props.refProp}
      data-aos="zoom-in"
      data-aos-duration="2000"
    >
      <div className="md:grid md:grid-cols-12 gap-4">
        <div className="col-start-1 col-end-4">
          <div className="bg-profile-image h-52 w-52 bg-cover rounded-full mx-auto my-auto">
            {/* PROFILE IMAGE - ABOUT SECTION*/}
          </div>
          <Socials />
        </div>

        <div className="col-start-5 col-end-12 rounded-lg p-4">
          <h2 className="py-4 text-2xl md:text-4xl text font-semibold font-nunito text-center md:text-left px-2">
            Hi There 👋
          </h2>
          <div className="text-xs md:text-base text-justify md:text-left p-4 md:px-2 font-nunito">
            I&apos;m Ejei-Okeke Emmanuel. With over four years of experience
            in Software development, I specialize in JavaScript frameworks and
            libraries such as React, Vue, and Node, while also adept in vanilla
            HTML, CSS, and JavaScript for web development. As a startup enthusiast,
            I&apos;m passionate about leveraging technology to drive
            entrepreneurial ventures forward, Beyond my professional endeavors,
            I enjoy football, music, movies, and anime. I find it difficult
            defining my personality so I took a test on{" "}
            <a
              href="https://www.16personalities.com/"
              target="_blank"
              rel="noreferrer"
            >
              16 Personalities.
            </a>{" "}
            Here&apos;s the{" "}
            <a
              href="https://www.16personalities.com/profiles/df110e2033c7b"
              className="text-amber-600 dark:text-cream hover:opacity-80 font-semibold"
              target="_blank"
              rel="noreferrer"
            >
              result.
            </a>
          </div>
          {/* <Skills /> */}
        </div>
      </div>
    </div>
  );
}
