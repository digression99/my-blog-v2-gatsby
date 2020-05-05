import React from 'react';
import { graphql } from 'gatsby';
import ReactMarkdown from "react-markdown";
import { PageLayout } from "../components/PageLayout"
import { Header } from "../components/Header"

export const query = graphql`
  query PostQuery($id: String!) {
    strapiPost(id : { eq : $id }) {
      id
      title
      content
      createdAt: created_at
      updatedAt: updated_at
    }
  }
`

export const Post = ({ data }) => {
  const { title, content, createdAt, updatedAt } = data.strapiPost;

  return (
    <PageLayout>
      <Header title="My think snippets." headerTo="/post" />
      <h1>{title}</h1>
      <div>{createdAt}</div>
      <div>Last modified - {updatedAt}</div>
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
