import React from "react"
import { graphql, Link } from "gatsby"

import { PageLayout } from "../components/PageLayout"
import { Header } from "../components/Header"

const IndexPage = ({ data }) => {
  return (
    <PageLayout>
      <Header
        title="Finally I've got my blog"
        subtitle="I bet you can get familiar with me."
      />
      <div>This is empty page.</div>
      <Link to="/post">Go to post</Link>
    </PageLayout>
  )
}

// const IndexPage = ({ data }) => {
//   console.log('data is : ', data);
//
//   const thinkSnippets = data.allStrapiThinkSnippet.edges.map(edge => edge.node);
//   console.log('think snippets : ', thinkSnippets);
//
//   return (
//     <Layout>
//       <SEO title="Home" />
//       <div>
//         {thinkSnippets.map(snippet => <li key={snippet.id}>{snippet.content}</li>)}
//       </div>
//       <h1>Hi people</h1>
//       <p>Welcome to your new Gatsby site.</p>
//       <p>Now go build something great.</p>
//       <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
//         <Image />
//       </div>
//       <Link to="/page-2/">Go to page 2</Link>
//     </Layout>
//   )
// }
//

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
