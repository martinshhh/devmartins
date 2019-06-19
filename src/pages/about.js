import React from 'react'
import Layout from '../components/PageLayout/index'

const Template = ({ data }) => {
  return (
    <Layout page="about">
      <div className="default-page-title">
        <h1>Hello!</h1>
        <hr></hr>
      </div>
    </Layout>
  )
}

export default Template

export const postQuery = graphql`
  query aboutQuery {
    allMarkdownRemark(limit: 10) {
      edges {
        node {
          id
          frontmatter {
            path
            title
          }
        }
      }
    }
  }
`