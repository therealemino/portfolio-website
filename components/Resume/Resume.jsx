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

  const experienceData = [
    {
      id: 1,
      date: "July 2024 - Present",
      name: "IT/Frontend",
      body: "",
      organization: "Echezona",
      link: "https://www.echezona.com",
    },
    {
      id: 2,
      date: "October 2021 - June 2024",
      name: "Front End Developer",
      body: "",
      organization: "Pennee Technologies",
      link: "https://yana.finance",
    },
    {
      id: 3,
      date: "July - Nov 2021, Nov 2022 - March 2024",
      name: "Front End Developer",
      body: "",
      organization: "Loiz Tours & travels Ltd",
      link: "https://loiztravels.com",
    },
    {
      id: 4,
      date: "Jan 2020 - April 2022",
      name: "Front End Developer",
      body: "",
      organization: "Nexbuy District",
      link: "https://www.nexbuydistrict.com/",
    },
    {
      id: 5,
      date: "August 2019 - January 2020",
      name: "Brand Ambassador",
      body: "Conduct day-to-day coordination, planning, and implementation of all activities involved in speaking about the company to the public as well as working closely, and getting feedback with webapp clients of the company",
      organization: "Nexbuy District",
      link: "https://www.nexbuydistrict.com/",
    },
    {
      id: 6,
      date: "Oct 2020 - Jan 2021",
      name: "Volunteer Intern",
      body: "Front-end developer and 'in-person' educator",
      organization: "Coriftech Solutions Ltd",
      link: "https://coriftech.com/",
    },
    // {
    //   id: 5,
    //   date: "January 2021 - Present",
    //   name: "Escrow Officer",
    //   body: "Regulate payment of the funds required for parties involved in a given transaction by holding and ensuring security of funds and all necessary obligations are met.",
    //   organization: "NEXSCROW [A subsidiary of Nexbuy District]",
    //   link: "https://nexscrow.herokuapp.com/"
    // },
    {
      id: 7,
      date: "July 2019 - December 2019",
      name: "Student Intern",
      body: "Worked with the Drawing Engineer/Draftsman in editing drawing structures for the then-ongoing project: 'Refurbishment of a Single Point Mooring Buoy'",
      organization: "West African Oilfield Services Ltd",
      link: "https://www.businesslist.com.ng/company/167540/west-african-oilfield-services-limited",
    },
  ];

  return (
    <div id="resume" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center font-semibold font-nunito text-2xl md:text-4xl">
        Resume
      </div>
      <div className="md:grid md:grid-cols-12 gap-4 md:w-5/6 mx-auto">
        <div className="col-start-1 col-span-6">
          <div data-aos="fade-right" data-aos-duration="2000">
            <ResumeTile
              name="Education / Certifications"
              educationData={educationData}
              experienceData={experienceData}
            />
          </div>
        </div>
        <div className="col-start-7 col-span-6">
          <div data-aos="fade-left" data-aos-duration="2000">
            <ResumeTile
              name="Work Experience"
              educationData={educationData}
              experienceData={experienceData}
            />
          </div>
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
