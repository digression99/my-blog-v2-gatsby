/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.createPages = async({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
  { 
    posts : allStrapiPost {
      edges {
        node {
          id
          updated_at
          created_at
          title
          content
        }
      }
    }
  }
  `);

  if (result.errors) {
    throw result.errors;
  }

  const posts = result.data.posts.edges;
  posts.forEach((post, index) => {
    createPage({
      path : `/post/${post.node.id}`,
      component: require.resolve('./src/templates/post.js'),
      context : {
        id: post.node.id
      }
    })
  });
}
