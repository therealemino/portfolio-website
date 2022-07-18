import React from 'react'

import { createClient } from '../../prismicio'

export async function getServerSideProps({ previewData }) {
  const client = createClient({ previewData })
  const page = await client.getByUID('post', 'first-post')

  return {
    props: { page }, // Will be passed to the page component as props
  }
}

async function logPage(e) {
  e.preventDefault
  console.log(this.props)
}

export default function Library(props) {
  console.log(props)

  return (
    <div onClick={ logPage }>Library</div>
    // <div>{props.page}</div>
  )
}
