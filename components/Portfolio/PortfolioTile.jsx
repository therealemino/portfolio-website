import React from 'react'

export default function Portfolio(props) {
  const portfolioItem = props.portfolioItem

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <a href={portfolioItem.link} target="_blank" rel="noreferrer">
            <div className="bg-white dark:bg-dark-brown rounded-lg p-4 my-1 md:my-4 shadow-2xl hover:shadow-inner" key={portfolioItem.name}>
              <img src={portfolioItem.logo} alt={`${portfolioItem.name} " logo"`} className = "object-contain w-24 h-24 md:w-32 md:h-32 mx-auto rounded-xl" />
              <div className="text-lg md:text-2xl text-center pb-2 pt-1 font-semibold">{portfolioItem.name}</div>
              <div className="text-xs md:text-sm font-light text-center">{portfolioItem.desc}</div>
            </div>
          </a>
        </div>
    )
}
