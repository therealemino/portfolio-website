import React from "react";

/* Education / certifications only. The work-experience list this used to also
   render now lives in components/Experience.jsx. */
export default function ResumeTile(props) {
  const educationList = props.educationData.map((item) => (
    <div
      className="bg-paper-50 dark:bg-[#242121] border-[1.5px] border-paper-300 dark:border-[#2e2b2b] rounded-lg p-4 my-4"
      key={item.name}
    >
      <div className="flex flex-row items-center text-xs md:text-base font-light">
        <span className="fa fa-calendar-o pr-2"></span> {item.date}
      </div>
      <h4 className="text-sm md:text-xl py-2">{item.name}</h4>
      <div>{item.body}</div>
      <a
        href={item.link}
        target="_blank"
        rel="noreferrer"
        className="py-2 text-xs md:text-base font-light text-amber-700 dark:text-cream"
      >
        <span className="fa fa-certificate pr-1"></span> {item.school}
      </a>
    </div>
  ));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="text-center text-xl md:text-2xl">{props.name}</div>
      {educationList}
    </div>
  );
}
