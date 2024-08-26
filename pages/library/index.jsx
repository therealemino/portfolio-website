import React, { useState } from "react";
import Head from "next/head";
import _ from "lodash";
import Link from "next/link";

import { createClient } from "../../prismicio";

export async function getServerSideProps({ previewData }) {
  const client = createClient({ previewData });
  const articles = await client.getAllByType("post", {
    fetchLinks: ["author.name", "author.image"],
  });

  return {
    props: { articles }, // Will be passed to the page component as props
  };
}

export default function Library(props) {
  // const [] = useState

  function logPage(e) {
    e.preventDefault;
    console.log(props.articles);
    darkMode();
  }

  function darkMode() {
    const darkmode = document.documentElement.classList.contains("dark");
    return darkmode;
  }

  const { articles } = props;

  return (
    <>
      <Head>
        {/* <!-- Primary Meta Tags --> */}
        <title>Library - Ejei-Okeke Emmanuel</title>
        <meta name="title" content="Library - Ejei-Okeke Emmanuel" />
        <meta
          name="description"
          content="Library. Blog articles, podcasts, etc. - Ejei-Okeke Emmanuel"
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://ejeiokekeemmanuel.dev/library"
        />
        <meta property="og:title" content="Library - Ejei-Okeke Emmanuel" />
        <meta
          property="og:description"
          content="Library. Blog articles, podcasts, etc. - Ejei-Okeke Emmanuel"
        />
        <meta property="og:image" content="/emino-image.jpg" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://ejeiokekeemmanuel.dev/library"
        />
        <meta
          property="twitter:title"
          content="Library - Ejei-Okeke Emmanuel"
        />
        <meta
          property="twitter:description"
          content="Library. Blog articles, podcasts, etc. - Ejei-Okeke Emmanuel"
        />
        <meta property="twitter:image" content="/emino-image.jpg" />
      </Head>
      <div className="">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <h3 className="text-2xl font-bold font-header mt-6" onClick={logPage}>
            Articles
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {articles.map((item) => (
              <Link href={`/blog/${item.uid}`} key={item.id} className="">
                <div className="relative rounded-lg bg-white dark:bg-dark-brown border-2 border-gray-100 dark:border-[#242121] cursor-pointer pb-12">
                  <div
                    // { Blog image }
                    className="w-full h-40 rounded-t-md bg-cover bg-center"
                    style={{
                      backgroundImage:
                        "linear-gradient(to right, #01010140, #00000010)" +
                        ", url(" +
                        item.data.image.url +
                        ")",
                    }}
                  ></div>
                  <div className="w-full relative">
                    <div className="p-5 font-normal flex flex-col justify-between h-full">
                      <div className="text-white dark:text-gray-300 bg-neutral-400 dark:bg-[#545055] text-xs rounded-bl-lg absolute top-0 right-0 px-4 py-2">
                        {item.data.category}
                      </div>
                      <h3 className="text-md w-4/5 font-header font-bold mt-4">
                        {item.data.title}
                      </h3>
                      <p className="mt-4 text-xs">{item.data.desc}</p>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full">
                    <div className="px-5 pb-3">
                      <p className="text-xs mt-4 font-header">
                        {item.data.date}
                      </p>
                      <p className="flex items-center justify-between text-xs mt-1 font-header">
                        <span>{item.data.readTime} mins read</span>
                        <span>{item.data.author.data.name[0].text}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
