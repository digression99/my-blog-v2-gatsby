import React from 'react';
import { Link, graphql } from "gatsby";
import styled from 'styled-components';
import dayjs from 'dayjs';
import { PageLayout } from "../components/PageLayout"
import { Header } from "../components/Header"

const PostList = styled.ul`
  display: flex;
  flex-direction: column;
  margin : 0;
  padding : 0;
`

const Wrapper = styled.li`
  list-style: none;
  padding: 2px 0;
  :not(:first-child) {
    margin-top : 1rem;
    padding-top: 1rem;
    border-top: 1px solid #e9ecef;
  }
  
  a {
    text-decoration: none;
    color: #000;
  }
  
  .list-item-title {
    font-size: 2rem;
    margin : 0;
  }
  
  .list-item-content {
    font-size: 1.1rem;
    padding : 3px 0;
  }
  
  .list-item-created-at {
    font-size: 0.8rem;
    padding: 5px 0;
  }
`

const PostListItem = ({ id, title, content, createdAt, updatedAt }) => (
  <Wrapper>
    <Link to={`/post/${id}`}>
      <h2 className="list-item-title">{title}</h2>
      <div className="list-item-created-at">{dayjs(createdAt).format('YYYY-M-D')}</div>
      <div className="list-item-content">{content}</div>
    </Link>
  </Wrapper>
)

export const PostPage = ({ data }) => {
  const posts = data.allStrapiPost.edges.map(edge => edge.node);

  return (
    <PageLayout>
      <Header
        title="My think snippets."
        subtitle="You can checkout some of my newest thoughts."
      />

      <PostList>
        {posts.map(post => <PostListItem key={post.id} {...post} />)}
      </PostList>

    </PageLayout>
  )
}

export const query = graphql`
query {
  allStrapiPost {
    edges {
      node {
        id
        title
        content
        createdAt: created_at
        updatedAt: updated_at
      }
    }
  }
}
`

export default PostPage;
