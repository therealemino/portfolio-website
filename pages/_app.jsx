import '../styles/globals.css'
import DefaultLayout from '../layouts/default'
import Head from 'next/head'
import { PrismicProvider } from '@prismicio/react'
import { PrismicPreview } from '@prismicio/next'
import { linkResolver, repositoryName } from '../prismicio'


function MyApp({ Component, pageProps }) {
  return (
    <PrismicProvider
      linkResolver={linkResolver}
      internalLinkComponent={({ href, children, ...props }) => (
        <Link href={href}>
          <a {...props}>
            {children}
          </a>
        </Link>
      )}
    >
      <DefaultLayout>
        <PrismicPreview repositoryName={repositoryName}>
          <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />
          </Head>
          <Component {...pageProps} />
        </PrismicPreview>
      </DefaultLayout>
    </PrismicProvider>
  )
}

export default MyApp
