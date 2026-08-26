import React, { useState } from "react";
import Seo from "../../components/Seo";
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
  const { articles } = props;

  return (
    <>
      <Seo
        title="Library — Writing by Ejei-Okeke Emmanuel"
        description="Essays and notes on building products, the engineering underneath them, and what the two teach each other."
        path="/library"
      />
      <div className="">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <h1 className="text-2xl font-bold font-header mt-6">
            Articles
          </h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {articles.map((item) => (
              // Card is the link itself. It used to wrap a <div>, which under
              // Next 12 meant no anchor was emitted at all: no crawlable path
              // to any post from here.
              <Link
                href={`/blog/${item.uid}`}
                key={item.id}
                className="relative block rounded-lg bg-paper-50 dark:bg-dark-brown border-2 border-paper-300 dark:border-[#242121] cursor-pointer pb-12">

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

              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
