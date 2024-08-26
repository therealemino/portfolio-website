import React, { useState } from "react";

export default function Skills() {
  const [skills, setSkills] = useState([
    "Javascript",
    "React",
    "Vue",
    "Node",
    "APIs",
    "PWAs",
    "Python"
  ]);

  return (
    <div data-aos="fade-up" data-aos-duration="2000">
      <div className="flex items-center justify-start flex-wrap text-center text-xs px-2">
        {skills.map((item, indx) => (
          <div className="flex items-center">
            <span
              key={indx}
              className={`font-display rounded-md text-xs md:text-sm font-medium cursor-pointer`}
            >
              <span>{item}</span>
            </span>
            {indx !== skills.length - 1 && (
              <div className="mx-2 w-1 h-1 rounded-full bg-brown-800 dark:bg-gray-300"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
