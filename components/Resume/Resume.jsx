import React from "react";
import ResumeTile from "./ResumeTile";

export default function Resume(props) {
  const educationData = [
    {
      date: "October 2015 - July 2021",
      name: "B.Eng, Electronic Engineering",
      school: "University of Nigeria",
      link: "https://drive.google.com/file/d/1BgDCBrEfAyvugAw5Q132WYdUFbVIhoVe/view?usp=sharing",
    },
    {
      date: "May 2020",
      name: "Fundamentals of Digital Marketing",
      school: "Google Digital Skills for Africa",
      link: "https://drive.google.com/file/d/1EFqM8CvSEjOFkvZpyxkGpA_SjLrKyzTg/view?usp=sharing",
    },
    {
      date: "April 2020",
      name: "How to Build Digital Products",
      school: "Product School",
      link: "https://drive.google.com/file/d/1LQYkR_Gqxe0XdBHhtaANDj2SaoRDrjis/view?usp=sharing",
    },
    {
      date: "August 2020",
      name: "HTML,CSS & Javascript for Web Developers",
      school: "John Hopkins University / Coursera",
      link: "https://www.coursera.org/account/accomplishments/verify/HLRN2UX6WSZA",
    },
    {
      date: "October 2020",
      name: "Python for Everybody Specialization",
      school: "University of Michigan, Coursera",
      link: "https://www.coursera.org/account/accomplishments/specialization/certificate/2RT38WHU7595",
    },
    {
      date: "November 2020",
      name: "AI for Everyone",
      school: "DeepLearning.ai",
      link: "https://www.coursera.org/account/accomplishments/certificate/RLRPXLUESB5B",
    },
    {
      date: "October 2020",
      name: "Creative Problem Solving",
      school: "University of Minnesota / Coursera",
      link: "https://www.coursera.org/account/accomplishments/verify/J7CHXUA9HMYU",
    },
  ];

  return (
    <div id="resume" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center font-semibold text-2xl md:text-4xl">
        Resume
      </div>
      <div className="md:w-5/6 mx-auto">
        <div data-aos="fade-right" data-aos-duration="2000">
          <ResumeTile name="Education / Certifications" educationData={educationData} />
        </div>
      </div>
      <div className="text-center md:text-center px-6">
        {/* href="https://drive.google.com/file/d/1XEXWBeaf-WbvnpctWaq60nhzmb_x1qYk/view?usp=sharing"  */}
        <a
          href="https://docs.google.com/document/d/e/2PACX-1vQ52CoqblC1ZB8hSOPijUDP4a6xnbIcL3xNR5iqlV3pgLn3mgqRecxN_9BcnGmeSWD8uXq0n196YmaG/pub"
          target="_blank"
          rel="noreferrer"
          className="text-amber-700 dark:text-cream hover:opacity-80 font-semibold"
        >
          Click here to view my full CV.
        </a>
      </div>
    </div>
  );
}
