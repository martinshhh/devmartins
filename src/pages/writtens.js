import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/PageLayout/index'

const Template = ({ data, location }) => {
  const posts = data.allMarkdownRemark.edges
  return (
    <Layout
      location={location}
      crumbLabel="Writtens"
      page="writtens"
      title="Writtens"
      titleMainClass="default-page-title"
    >
      <Helmet title={'Martins - Writtens'} />
      <hr></hr>
      <div className="posts-container">
        <ul>
          {posts.map(ele => {
            return (
              <Link to={ele.node.frontmatter.path} key={ele.node.id}>
                <li>
                  <div className="post-icon-container">
                    {/* <img src="#" alt="X"></img> */}
                    <span>IMG</span>
                  </div>
                  <div>
                    <h5 className="post-title">{ele.node.frontmatter.title}</h5>
                    <span> - </span>
                    <span>{ele.node.frontmatter.date}</span>
                    <p>{ele.node.frontmatter.description}</p>
                  </div>
                </li>
              </Link>
            )
          })}
        </ul>
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
  query writtensQuery {
    allMarkdownRemark(limit: 10) {
      edges {
        node {
          id
          frontmatter {
            path
            title
            description
            date
          }
        }
      }
    }
  }
`
