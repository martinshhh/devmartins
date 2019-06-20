import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

import Layout from '../components/PageLayout/index'

const Template = ({ data }) => {
  return (
    <Layout page="about">
      <Helmet title={'Martins - About'} />
      <div className="default-page-title">
        <h1>Hello!</h1>
        <hr></hr>
      </div>
    </Layout>
  )
}

export default Template

Template.propTypes = {
  data: PropTypes.object,
  location: PropTypes.object,
}

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
