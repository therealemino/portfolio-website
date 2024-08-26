import React from "react";

export default function Portfolio(props) {
  const portfolioItem = props.portfolioItem;

  return (
    <a
      href={portfolioItem.link}
      target="_blank"
      rel="noreferrer"
      className="block max-w-7xl w-full mx-auto bg-gray-50 dark:bg-[#242121] border-[1.5px] border-gray-100 dark:border-[#2e2b2b] rounded-lg p-4"
    >
      <div>
        <div className="" key={portfolioItem.name}>
          <div className="flex items-center mb-4">
            <img
              src={portfolioItem.logo}
              alt={`${portfolioItem.name} " logo"`}
              className="object-contain h-8 w-1/5 md:w-1/5 mx-auto"
            />
            <div className="w-4/5 text-md md:text-sm lg:text-md text-left pb-2 pt-1 ml-2 font-semibold">
              {portfolioItem.name}
            </div>
          </div>
          <div className="text-xs md:text-sm font-light">
            {portfolioItem.desc}
          </div>
        </div>
        <div className="text-[10px] md:text-[11px] font-light mt-4">
          <span className="font-normal">Role:</span> {portfolioItem.role}
        </div>
      </div>
    </a>
  );
}
