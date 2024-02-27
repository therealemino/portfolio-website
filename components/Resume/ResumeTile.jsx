import React from 'react'

export default function ResumeTile(props) {
  const educationData = props.educationData;
  const experienceData = props.experienceData;
  const educationList = educationData.map((item) =>
    <div className="bg-white dark:bg-dark-brown rounded-lg p-4 my-4 shadow-2xl" key={item.name}>
      <div className="flex flex-row items-center text-xs md:text-base font-light"><span className="fa fa-calendar-o pr-2"></span> {item.date}</div>
      <h4 className="text-sm md:text-xl py-2">{item.name}</h4>
      <div>{ item.body }</div>
      <a href={item.link} target="_blank" rel="noreferrer" className="py-2 text-xs md:text-base font-light font-nunito text-light-green md:text-light-blue dark:text-cream">
        <span className="fa fa-certificate pr-1"></span> { item.school } 
      </a>
    </div>
  )

  const experienceList = experienceData.map((item) =>
    <div className="bg-white dark:bg-dark-brown rounded-lg p-4 my-4 shadow-2xl" key={item.id}>
      <div className="flex flex-row items-center text-xs md:text-base font-light"><span className="fa fa-calendar-o pr-2"></span> {item.date}</div>
      <h4 className="text-md md:text-xl py-2">{item.name}</h4>
      {/* <div className="py-1 text-xs md:text-sm font-normal">{ item.body }</div> */}
      <a href={item.link} target="_blank" rel="noreferrer" className="py-3 text-xs md:text-base font-light font-nunito text-light-green md:text-light-blue dark:text-cream">
        <span className={`${props.name==="Work Experience" ? "fa-bookmark" : "fa-certificate"} " fa pr-2 mr-2"`}></span> 
        { item.organization }
      </a>
    </div>
  )


    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="text-center text-xl md:text-2xl">{ props.name }</div>
          { props.name==="Work Experience" ? experienceList : educationList }
        </div>
    )
}
