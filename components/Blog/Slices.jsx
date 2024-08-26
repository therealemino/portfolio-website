import React, { useEffect, ReactElement, ReactNode } from "react";
import { PrismicRichText } from "@prismicio/react";
import { Icon } from "@iconify/react";
import { onlyText } from "react-children-utilities";
import CopyToClipboard from "react-copy-to-clipboard";
import hljs from "highlight.js";

export default function Slices(props, { markdownContent }) {
  const { slices } = props;

  const linkResolver = (doc) => {
    return doc.url;
  };

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
          heading3: ({ children, text }) => (
            <h3
              id={text}
              className="text-lg sm:text-xl md:text-2xl font-header font-bold mt-5 mb-1"
            >
              {children}
            </h3>
          ),
          heading5: ({ children, text }) => (
            <h5
              id={text}
              className="text-md md:text-lg font-header font-bold mt-5 mb-1"
            >
              {children}
            </h5>
          ),
          paragraph: ({ children }) => (
            <p className="mb-3 text-base">{children}</p>
          ),
          listItem: ({ children }) => (
            <li className="mb-1 text-base">{children}</li>
          ),
          oListItem: ({ children }) => (
            <li className="mb-1 text-base">{children}</li>
          ),
          blockquote: ({ children }) => <blockquote>{children}</blockquote>,
          hyperlink: ({ node, children }) => {
            const url = linkResolver(node.data);
            return (
              <a
                target={node.data.target}
                href={node.data.url}
                className="bg-amber-600 dark:bg-link-dark bg-clip-text text-transparent"
              >
                {children}
              </a>
            );
          },
          image: ({ node }) => {
            const linkUrl = node.linkTo ? linkResolver(node.linkTo) : null;
            const linkTarget =
              node.linkTo && node.linkTo.target
                ? `target="${node.linkTo.target}" rel="noopener"`
                : "";
            const wrapperClassList = [node.label || "", "block-img"];
            const img = (
              <img
                src={node.url}
                className="object-cover w-full mx-auto"
                alt={node.alt ? node.alt : ""}
                copyright={node.copyright ? node.copyright : ""}
              />
            );

            return (
              <div className={wrapperClassList.join(" ")}>
                {linkUrl ? (
                  <a {...linkTarget} href={linkUrl}>
                    {img}
                  </a>
                ) : (
                  img
                )}
              </div>
            );
          },
          preformatted: ({ children }) => {
            return (
              <div className="relative overflow-auto max-h-96 my-4 bg-medium-green md:bg-cool-gray-700 dark:bg-dark-brown rounded-md p-5 font-mono text-white dark:text-cool-gray-300 text-sm md:text-base">
                <pre className="overflow-auto">
                  <code className="language-js language-css language-py language-jsx">
                    {children}
                  </code>
                  <CopyToClipboard text={onlyText(children)}>
                    <Icon
                      icon="prime:copy"
                      className="absolute top-2 right-2 text-2xl"
                    />
                  </CopyToClipboard>
                </pre>
              </div>
            );
          },
        }}
      />
    </div>
  );
}
