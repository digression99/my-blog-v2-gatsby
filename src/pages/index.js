import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  console.log('data is : ', data);

  const thinkSnippets = data.allStrapiThinkSnippet.edges.map(edge => edge.node);
  console.log('think snippets : ', thinkSnippets);

  return (
    <Layout>
      <SEO title="Home" />
      <div>
        {thinkSnippets.map(snippet => <li key={snippet.id}>{snippet.content}</li>)}
      </div>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export const query = graphql`
  query {
    allStrapiThinkSnippet {
      edges {
        node {
          content
          id
        }
      }
    }
  }
  
`

export default IndexPage
