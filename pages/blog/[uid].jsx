import React, { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { Icon } from "@iconify/react";
import { PrismicRichText } from "@prismicio/react";

import { createClient } from "../../prismicio";
import Slices from "../../components/Blog/Slices";
import { meta } from "../../utils/meta";

export async function getServerSideProps({ previewData, query }) {
  const client = createClient({ previewData });
  const article = await client.getByUID("post", query.uid, {
    fetchLinks: ["author.name", "author.image"],
  });
  const { body } = article.data;
  const toc = [];
  body.forEach((item) => {
    if (item.type === "heading3" || item.type === "heading5") {
      toc.push(item);
    }
  });
  return {
    props: { article, toc }, // Will be passed to the page component as props
  };
}

export default function BlogId(props) {
  const router = useRouter();

  async function logPage(e) {
    e.preventDefault;
    console.log(props);
  }

  const { data } = props.article;

  useEffect(() => {
    // console.log(router.asPath);
  }, []);

  return (
    <>
      <Head>
        <title>{data.title + "- Ejei-Okeke Emmanuel's Blog"}</title>
        <meta name="description" content={data.desc} />
        <meta name="twitter:card" content="summary_large_image"></meta>
        <meta name="twitter:site" content={meta.twitterUsername} />
        <meta name="twitter:creator" content={meta.twitterUsername} />
        <meta name="twitter:title" content={data.title} />
        <meta name="twitter:description" content={data.desc} />
        <meta name="twitter:image" content={data.image.url} />
        <meta
          property="og:url"
          content={`https://ejeiokekeemmanuel.vercel.app/blog/${props.article.uid}`}
        />
        <meta property="og:title" content={data.title} />
        <meta property="og:description" content={data.desc} />
        <meta property="og:image" content={data.image.url} />
        <meta property="og:keywords" content={data.keywords} />
      </Head>

      <div className="min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <h3
            className="text-sm md:text-lg font-semibold font-header mt-6 flex items-center"
            onClick={logPage}
          >
            <Link href="/">
              <a>
                <Icon icon="bxs:home" className="mx-1 text-xl" />
              </a>
            </Link>
            <Icon icon="akar-icons:chevron-right" className="mx-1 text-sm" />
            <Link href="/library">
              <a>Blog</a>
            </Link>
            <Icon icon="akar-icons:chevron-right" className="mx-1 text-sm" />
            <a>{`${data.title.substring(0, 20)}${
              data.title.length > 20 ? "..." : ""
            }`}</a>
          </h3>
          <div className="block relative lg:flex mt-6">
            <div className="lg:w-3/4 mr-auto p-4">
              <h1 className="text-xl lg:text-3xl font-bold font-header">
                {data.title}
              </h1>
              <img src={data.image.url} alt="" className="rounded-md mt-5" />
              <div className="body my-5">
                <Slices slices={data.body} />
              </div>
            </div>

            {/* Table of Content */}
            <div className="hidden lg:block sticky z-0 min-h-full h-4/5 top-28 right-0 w-1/4 py-3 px-5">
              <h2 className="text-xl font-bold">Outline</h2>
              <div className="mt-4">
                <PrismicRichText
                  field={props.toc}
                  components={{
                    heading3: ({ children, text }) => (
                      <Link
                        href={`#${text}`}
                        className="text-sm font-header font-semibold mt-5 mb-1"
                      >
                        <a className="flex items-center py-2 text-sm hover:text-cool-gray-800 dark:hover:text-white hover:font-medium">
                          <Icon
                            icon="fa6-solid:location-dot"
                            className="mr-2"
                          />
                          {children}
                        </a>
                      </Link>
                    ),
                    heading5: ({ children, text }) => (
                      <Link
                        href={`#${text}`}
                        className="text-xs font-header mt-5 mb-1"
                      >
                        <a className="flex items-center font-normal py-2 hover:text-cool-gray-700 dark:hover:text-white hover:font-medium text-sm ml-6">
                          <Icon
                            icon="akar-icons:arrow-forward-thick-fill"
                            className="mr-2"
                          />
                          {children}
                        </a>
                      </Link>
                    ),
                  }}
                />
              </div>
              <div className="hidden lg:block mt-5">
                <p className="text-xs lg:text-sm my-2 font-header">
                  Date Published: {data.date}
                </p>
                <p className="text-xs lg:text-sm mt-5 font-header">
                  Enjoyed the article? Please Share
                </p>
                <div className="flex justify-left items-center mt-2">
                  <a
                    href={`https://twitter.com/intent/tweet?original_referer=${encodeURI(
                      "https://ejeiokekeemmanuel.vercel.app"
                    )}&text=${encodeURI(data.title)}&url=${encodeURI(
                      `https://ejeiokekeemmanuel.vercel.app${router.asPath}`
                    )}`}
                    target="_blank"
                    className="mr-2 hover:text-cool-gray-500 dark:hover:text-white hover:font-bold"
                  >
                    <Icon icon="akar-icons:twitter-fill" className="text-xl" />
                  </a>
                  <a
                    href={`https://wa.me/?text=${encodeURI(
                      `${data.title} - Ejei-Okeke Emmanuel's Blog. https://ejeiokekeemmanuel.vercel.app${router.asPath}`
                    )}`}
                    target="_blank"
                    data-action="share/whatsapp/share"
                    className="mr-2 hover:text-cool-gray-500 dark:hover:text-white hover:font-bold"
                  >
                    <Icon icon="ri:whatsapp-fill" className="text-xl" />
                  </a>
                  <a
                    href={`http://www.linkedin.com/shareArticle?mini=true&url=https://ejeiokekeemmanuel.vercel.app${router.asPath}&title=${data.title}&summary=${data.desc}`}
                    target="_blank"
                    className="mr-2 hover:text-cool-gray-500 dark:hover:text-white hover:font-bold"
                  >
                    <Icon
                      icon="akar-icons:linkedin-box-fill"
                      className="text-xl"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:hidden mt-5 text-center">
            <p className="text-xs lg:text-sm my-2 font-header">
              Date Published: {data.date}
            </p>
            <p className="text-sm lg:text-sm mt-5 font-header">
              Enjoyed the article? Please Share
            </p>
            <div className="flex justify-center items-center mt-2">
              <a
                href={`https://twitter.com/intent/tweet?original_referer=${encodeURI(
                  "https://ejeiokekeemmanuel.vercel.app"
                )}&text=${encodeURI(data.title)}&url=${encodeURI(
                  `https://ejeiokekeemmanuel.vercel.app${router.asPath}`
                )}`}
                target="_blank"
                className="mr-3 hover:text-cool-gray-500 dark:hover:text-white hover:font-bold"
              >
                <Icon
                  icon="akar-icons:twitter-fill"
                  className="mx-1 text-3xl"
                />
              </a>
              <a
                href={`https://wa.me/?text=${encodeURI(
                  `${data.title} - Ejei-Okeke Emmanuel's Blog. https://ejeiokekeemmanuel.vercel.app${router.asPath}`
                )}`}
                target="_blank"
                data-action="share/whatsapp/share"
                className="mr-3 hover:text-cool-gray-500 dark:hover:text-white hover:font-bold"
              >
                <Icon icon="ri:whatsapp-fill" className="mx-1 text-3xl" />
              </a>
              <a
                href={`http://www.linkedin.com/shareArticle?mini=true&url=https://ejeiokekeemmanuel.vercel.app${router.asPath}&title=${data.title}&summary=${data.desc}`}
                target="_blank"
                className="mr-3 hover:text-cool-gray-500 dark:hover:text-white hover:font-bold"
              >
                <Icon
                  icon="akar-icons:linkedin-box-fill"
                  className="mx-1 text-3xl"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
