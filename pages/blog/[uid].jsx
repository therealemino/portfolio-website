import React from 'react'

import { createClient } from '../../prismicio'

export async function getServerSideProps({ previewData }) {
  const client = createClient({ previewData })
  const article = await client.getByUID('post', 'first-post', {
    fetchLinks: ['author.name', 'author.image'],
  })

  return {
    props: { article }, // Will be passed to the page component as props
  }
}

export default function BlogId(props) {
  async function logPage(e) {
    e.preventDefault
    console.log(props)
  }

  return (
    <div onClick={logPage}>BlogId</div>
  )
}
