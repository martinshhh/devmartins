import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/PageLayout/index'
import IntroImageBox from '../components/IntroImageBox'
import HomePostsList from '../components/HomePostsList'

const Template = ({ data }) => {
  const posts = data.allMarkdownRemark.edges
  return (
    <Layout
      page="root"
      title="Hello, I'm Pedro"
      titleMainClass="welcome-container"
      titleSubClass="welcome-text"
    >
      <Helmet title={'Martins - Home'} />
      <div className="row info-container">
        <div className="col-lg-6">
          <p className="intro-text">
            {/* TODO Create a assets folder with this kind of text */}
            I&apos;m a portuguese web developer specializing in modern
            JavaScript. Worked with React, Angular, Meteor and Loopback
            frameworks and I also enjoy the game development area.
            <br></br>I love travelling and meet new countries. &PT& &CA& &JO&
            &SP&.
          </p>
        </div>
        <div className="col-lg-6">
          <div className="row">
            <div className="col-6">
              <IntroImageBox
                image={data.angular.childImageSharp.fixed}
                fit="cover"
                position="50% 50%"
                alt="Angular"
                title="AngularJS"
                subTitle=""
              />
            </div>
            <div className="col-6">
              <IntroImageBox
                image={data.react.childImageSharp.fixed}
                fit="cover"
                position="50% 50%"
                alt="React"
                title="React"
                subTitle="React Native"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <IntroImageBox
                image={data.javascript.childImageSharp.fixed}
                fit="cover"
                position="50% 50%"
                alt="JS"
                title="JavaScript"
                subTitle="ES6"
              />
            </div>
            <div className="col-6">
              <IntroImageBox
                image={data.nodejs.childImageSharp.fixed}
                fit="cover"
                position="50% 50%"
                alt="JS"
                title="Node JS"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <IntroImageBox
                image={data.javascript.childImageSharp.fixed}
                fit="cover"
                position="50% 50%"
                alt="JS"
                title="Meteor JS"
              />
            </div>
            <div className="col-6">
              <IntroImageBox
                image={data.nodejs.childImageSharp.fixed}
                fit="cover"
                position="50% 50%"
                alt="JS"
                title="Loopback"
              />
            </div>
          </div>
        </div>
      </div>
      <hr></hr>
      <div className="posts-container">
        <h3>Recent Posts</h3>
        <HomePostsList posts={posts} />
      </div>
    </Layout>
  )
}

export default Template

Template.propTypes = {
  data: PropTypes.object,
}

export const postQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(limit: 5) {
      edges {
        node {
          id
          frontmatter {
            path
            title
            description
          }
        }
      }
    }
    angular: file(relativePath: { eq: "angular-icon.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 25, height: 25) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    react: file(relativePath: { eq: "react-icon.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 25, height: 25) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    javascript: file(relativePath: { eq: "javascript-icon.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 25, height: 25) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    nodejs: file(relativePath: { eq: "nodejs.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 25, height: 25) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
