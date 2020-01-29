import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/PageLayout/index'

const Template = ({ data }) => {
  return (
    <Layout
      page="contact"
      title="Contact Me"
      titleMainClass="default-page-title"
    >
      <Helmet title={'Martins - Contact'} />
      <hr></hr>
      <form>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            className="form-control"
            id="email"
            placeholder="yourmail@example.com"
          ></input>
          <label htmlFor="subject">Subject</label>
          <select id="subject" className="form-control">
            <option defaultValue>JavaScript</option>
            <option>One of my writens</option>
            <option>Work related</option>
            <option>Gaming</option>
            <option>Good developer habits</option>
            <option>Other</option>
          </select>
          <label htmlFor="messageBox">Message</label>
          <textarea
            type="text"
            className="form-control"
            id="messageBox"
            placeholder="What do you have on your mind?"
            maxLength="1000"
          ></textarea>
        </div>
      </form>
    </Layout>
  )
}

export default Template

Template.propTypes = {
  data: PropTypes.object,
  location: PropTypes.object,
}

export const postQuery = graphql`
  query contactQuery {
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
