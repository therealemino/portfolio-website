import "../styles/globals.css";
import DefaultLayout from "../layouts/default";
import Head from "next/head";
import { PrismicPreview } from "@prismicio/next/pages";
import { repositoryName } from "../prismicio";

/* PrismicProvider is gone in @prismicio/react v3 — link resolution and the
   internal link component are passed per render instead. Its internalLinkComponent
   here was dead code anyway: it referenced Link without importing it, so any
   internal Prismic link would have thrown a ReferenceError. Nothing in the app
   renders Prismic link fields, so there is nothing to replace it with.

   The manifest <link> lives in layouts/default.jsx; it used to be in both and
   rendered twice. */

function MyApp({ Component, pageProps }) {
  return (
    <DefaultLayout>
      <PrismicPreview repositoryName={repositoryName}>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
          />
        </Head>
        <Component {...pageProps} />
      </PrismicPreview>
    </DefaultLayout>
  );
}

export default MyApp;
