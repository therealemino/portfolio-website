import React, { useState } from 'react'
import _ from 'lodash'
import Link from 'next/link'


import { createClient } from '../../prismicio'

export async function getServerSideProps({ previewData }) {
  const client = createClient({ previewData })
  const articles = await client.getAllByType('post', {
    fetchLinks: ['author.name', 'author.image'],
  })

  return {
    props: { articles }, // Will be passed to the page component as props
  }
}


export default function Library(props) {
  // const [] = useState

  function logPage(e) {
    e.preventDefault
    console.log(props.articles)
    darkMode()
  }
  
  function darkMode() {
    const darkmode = (document.documentElement.classList.contains('dark'))
    return darkmode
  }

  const { articles } = props


  return (
    <div
      className="bg-whitish-green md:bg-whitish-blue dark:bg-brownish-purple relative text-dark-green md:text-dark-blue dark:text-gray-300 font-nunito"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <h3 className="text-2xl font-bold font-quicksand mt-6" onClick={ logPage } >Articles</h3>
        <div className="grid lg:grid-cols-2 gap-4 mt-4">
          {
            articles.map((item) => 
              <Link href={`/blog/${item.uid}`} key={item.id} className="">
                <a href="" className='rounded-lg bg-white dark:bg-dark-brown md:flex items-center cursor-pointer'>
                  <div 
                    // { Blog image }
                    className="w-full md:w-1/3 h-40 md:h-full rounded-t-lg md:rounded-l-lg md:rounded-tr-none bg-cover bg-center"
                    style={{ backgroundImage: ('linear-gradient(to right, #01010140, #00000010)') + ', url(' + item.data.image.url + ')' }}  
                  ></div>
                  <div className="w-full md:h-full md:w-2/3 relative">
                    <div className='p-5 font-normal flex flex-col justify-between h-full'>
                      <div className="text-white dark:text-gray-300 bg-light-green md:bg-sky-blue dark:bg-[#545055] text-xs rounded-bl-lg md:rounded-tr-lg absolute top-0 right-0 px-4 py-2">
                        {item.data.category}
                      </div>
                      <h3 className="text-lg w-4/5 font-quicksand font-bold">{item.data.title}</h3>
                      <p className='mt-4 text-sm'>
                        {item.data.desc}
                      </p>
                      <div>
                        <p className='text-xs mt-4 font-quicksand'>{item.data.date}</p>
                        <p className='flex items-center justify-between text-xs mt-1 font-quicksand'>
                          <span>{item.data.readTime} mins read</span>
                          <span>{item.data.author.data.name[0].text}</span>
                        </p>
                      </div>
                      <hr className='absolute bottom-0 left-0 w-full rounded-b-lg md:rounded-bl-none md:rounded-br-xl animate-loadingLine border-none h-1 bg-gradient-line md:bg-gradient-line-md dark:bg-dark-gradient-line' />
                    </div>
                  </div>
                </a>
              </Link>
            )
          }
        </div>
      </div>
    </div>
  )
}
