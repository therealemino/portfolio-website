import React, { useEffect,ReactElement, ReactNode } from 'react'
import { PrismicRichText } from "@prismicio/react"
import { Icon } from '@iconify/react';
import { onlyText } from 'react-children-utilities';
import CopyToClipboard from "react-copy-to-clipboard";
import hljs from 'highlight.js';



export default function Slices(props, {markdownContent}) {
  const { slices } = props

  useEffect(() => {
    // hljs.configure({useBR: true})
    hljs.highlightAll();
  }, []);  
  
  return (
    // <></>
    <div>
      <PrismicRichText 
        field={slices}
        components={{
          heading3: ({ children,text }) => <h3 id={text} className='text-lg md:text-2xl font-quicksand font-bold mt-5 mb-1'>{children}</h3>,
          paragraph: ({ children }) => <p className='mb-3'>{children}</p>,
          // 'o-list-item': ({ children }) => <ol className='mb-3'>{children}</ol>,
          blockquote: ({children}) => <blockquote>{children}</blockquote>,
          preformatted: ({children}) => { 
            return  <div className="relative overflow-auto max-h-96 my-4 bg-medium-green md:bg-cool-gray-700 dark:bg-dark-brown rounded-md p-5 font-mono text-white dark:text-cool-gray-300 text-xs md:text-sm">
                <pre className='overflow-auto'>
                  <code className='language-js language-css language-py language-jsx'>
                      {children}
                  </code>
                  <CopyToClipboard text={onlyText(children)}>
                    <Icon icon="prime:copy" className='absolute top-2 right-2 text-2xl' />
                  </CopyToClipboard>
                </pre>
              </div>
          }
        }}
      />
    </div>
  )
}