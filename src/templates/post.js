import React from 'react';
import { graphql } from 'gatsby';
import ReactMarkdown from "react-markdown";
import { PageLayout } from "../components/PageLayout"

export const query = graphql`
  query PostQuery($id: String!) {
    strapiPost(id : { eq : $id }) {
      id
      title
      content
      created_at
      updated_at
    }
  }
`

export const Post = ({ data }) => {
  const { id, title, content, created_at, updated_at } = data.strapiPost;
  return (
    <PageLayout>
      <h1>{title}</h1>
      <div>{created_at}</div>
      <ReactMarkdown
        source={content}
        transformImageUri={uri => uri.startsWith('http') ? uri : `http://localhost:1337${uri}`}
        renderers={{
          image : (data) => {
            console.log('renderer image data : ', data);
            return <img alt="image" src={data.src} style={{ maxWidth: '600px' }} />
          }
        }}
      />
    </PageLayout>
  )
}

export default Post;
