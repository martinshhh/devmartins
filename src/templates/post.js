import React from 'react';
import Link from 'gatsby-link'
import Layout from '../components/PageLayout/index'

export default function Template({ data, location }) {
  const { markdownRemark: post } = data;
  return (
    <Layout location={location} crumbLabel={post.frontmatter.title} page="post">
      <div className="default-page-title">
        <h1>{post.frontmatter.title}</h1>
      </div>
      <hr></hr>
      <div dangerouslySetInnerHTML={{__html: post.html}} />
    </Layout>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path }}) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`
