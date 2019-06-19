/* eslint-disable quotes */
const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  const postTemplate = path.resolve(`./src/templates/post.js`);
  return graphql(
    `
      {
        allMarkdownRemark {
          edges {
            node {
              html
              id
              frontmatter {
                title
                path
                description
                date
              }
            }
          }
        }
      }
    `
  ).then(res => {
    if (res.errors) {
      return Promise.reject(res.errors);
    }

    // Create blog posts pages.
    const posts = res.data.allMarkdownRemark.edges;

    posts.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: postTemplate,
      });
    });

    return null;
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};
