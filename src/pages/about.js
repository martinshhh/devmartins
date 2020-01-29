import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/PageLayout/index'

const Template = ({ data }) => {
  return (
    <Layout page="about" title="About" titleMainClass="default-page-title">
      <Helmet title={'Martins - About'} />
      <hr></hr>
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
