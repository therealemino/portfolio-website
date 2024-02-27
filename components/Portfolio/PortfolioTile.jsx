import React from 'react'

export default function Portfolio(props) {
  const portfolioItem = props.portfolioItem

  return (
    <div className="flex flex-col justify-between max-w-7xl w-full mx-auto bg-white dark:bg-dark-brown rounded-lg p-4 my-3 md:my-4 shadow-2xl hover:shadow-inner">
      <div>
        <div className="" key={portfolioItem.name}>
          <div className="flex items-center mb-4">
            <img src={portfolioItem.logo} alt={`${portfolioItem.name} " logo"`} className="object-contain h-8 w-1/5 md:w-1/5 mx-auto" />
            <div className="w-4/5 text-md md:text-sm lg:text-md text-left pb-2 pt-1 ml-2 font-semibold">{portfolioItem.name}</div>
          </div>
          <div className="text-xs md:text-sm font-light">{portfolioItem.desc}</div>
        </div>
        <div className="text-[10px] md:text-[11px] font-light mt-4">Tools: {portfolioItem.tools}</div>
      </div>
      <a href={portfolioItem.link} target="_blank" rel="noreferrer" className="bg-link-dark bg-clip-text text-light-green md:text-light-blue dark:text-transparent font-inter w-fit text-sm font-normal mt-4">View </a>
    </div>
  )
}
