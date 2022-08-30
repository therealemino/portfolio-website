import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretUp } from '@fortawesome/free-solid-svg-icons'
import {
  faReact,
  faVuejs,
  faNodeJs,
  faGitAlt
} from '@fortawesome/free-brands-svg-icons';


export default function Skills() {
    const [skills, setSkills] = useState ([
      // { name: "React", logo: faReact },
      // { name: "Vue", logo: faVuejs },
      { name: "Node.js", logo: faNodeJs, className: "fa fa-node-js" },
      { name: "Nuxt.js", logo: faVuejs, className: "fa fa-vue-js" },
      { name: "Next.js", logo: faCaretUp, className: "fa fa-react-js" },
      // { name: "Git", logo: faGitAlt },
    ])

    return (
      <>
        <div data-aos="fade-up" data-aos-duration="2000" className="md:hidden text-center text-3xl py-5 px-2">
          {skills.map((item) =>
            <span key={item.name}  className = {`bg-dark-green dark:bg-light-brownish-purple text-gray-300 dark:text-gray-300 font-semibold font-montserrat hover:bg-medium-green hover:text-gray-300 dark:hover:bg-brownish-purple px-5 py-2 mx-1 rounded-md text-xs md:text-sm font-medium cursor-pointer`}>
              <span className={item.className}></span>
              <span>{ item.name }</span>
            </span>
          )}
        </div>
        <div data-aos="fade-up" data-aos-duration="2000" className="hidden md:block text-center text-3xl py-5 px-2">
          {skills.map((item) =>
            <span key={item.name}  className = {`bg-medium-blue dark:bg-light-brownish-purple text-gray-300 dark:text-gray-300 font-semibold font-montserrat hover:bg-dark-blue hover:text-gray-300 dark:hover:bg-dark-brown px-5 py-2 mx-1 rounded-md text-xs md:text-sm font-medium cursor-pointer`}>
              <span className={item.className}></span>
              <span>{ item.name }</span>
            </span>
          )}
        </div>
      </>
    )
}
