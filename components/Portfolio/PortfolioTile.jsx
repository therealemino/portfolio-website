import React from 'react'

export default function Portfolio(props) {
  const portfolioItem = props.portfolioItem

    return (
        <div className="max-w-7xl w-full mx-auto bg-white dark:bg-dark-brown rounded-lg p-4 my-1 md:my-4 shadow-2xl hover:shadow-inner">
          <a href={portfolioItem.link} target="_blank" rel="noreferrer">
            <div className="" key={portfolioItem.name}>
              <div className="flex items-center mb-4">
                <img src={portfolioItem.logo} alt={`${portfolioItem.name} " logo"`} className = "object-contain h-8 w-1/5 md:w-1/5 mx-auto" />
                <div className="w-4/5 text-md md:text-sm lg:text-md text-left pb-2 pt-1 ml-2 font-semibold">{portfolioItem.name}</div>
              </div>
              <div className="text-xs md:text-sm font-light text-center">{portfolioItem.desc}</div>
            </div>
          </a>
        </div>
    )
}
