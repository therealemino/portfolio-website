import '../styles/globals.css'
import DefaultLayout from '../layouts/default'
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
        <Component {...pageProps} />
      </PrismicPreview>
    </DefaultLayout>
  </PrismicProvider>    
  )
}

export default MyApp
