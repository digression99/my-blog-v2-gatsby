import React from 'react';
import { PageLayout } from "../components/PageLayout"
import { Header } from "../components/Header"

export const PostPage = () => {
  return (
    <PageLayout>
      <Header
        title="My think snippets."
        subtitle="You can checkout some of my newest thoughts."
      />
      <div>This is post page.</div>
    </PageLayout>
  )
}

export default PostPage;
