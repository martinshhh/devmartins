import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

import Layout from '../components/PageLayout/index'
import IntroImageBox from '../components/IntroImageBox'
import HomePostsList from '../components/HomePostsList'

const Template = ({ data }) => {
  const posts = data.allMarkdownRemark.edges
  return (
    <Layout page="root">
      <Helmet title={'Martins - Home'} />
      <div className="welcome-container">
        <div className="welcome-text">
          <h1>Hello</h1>
        </div>
      </div>
      <div className="info-container">
        <div className="sub-info-container-1">
          <h5>I'm Pedro Martins</h5>
          <p>
            A small introduction about me. A small introduction about me. A
            small introduction about me. A small introduction about me. A small
            introduction about me. A small introduction about me. A small
            introduction about me. A small introduction about me. A small
            introduction about me. A small introduction about me. A small
            introduction about me. A small introduction about me. A small
            introduction about me. A small introduction about me. A small
            introduction about me. A small introduction about me. A small
            introduction about me. A small introduction about me.
          </p>
        </div>
        <div className="sub-info-container-2">
          <IntroImageBox
            image={data.angular.childImageSharp.fixed}
            fit="cover"
            position="50% 50%"
            alt="Angular"
            title="AngularJS"
            subTitle=""
          />
          <IntroImageBox
            image={data.react.childImageSharp.fixed}
            fit="cover"
            position="50% 50%"
            alt="React"
            title="React"
            subTitle="React Native"
          />
          <IntroImageBox
            image={data.javascript.childImageSharp.fixed}
            fit="cover"
            position="50% 50%"
            alt="JS"
            title="JavaScript"
            subTitle="ES6"
          />
        </div>
      </div>
      <hr></hr>
      <div className="posts-container">
        <h3>Posts</h3>
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
    allMarkdownRemark(limit: 10) {
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
        fixed(width: 70, height: 70) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    react: file(relativePath: { eq: "react-icon.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 70, height: 70) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    javascript: file(relativePath: { eq: "javascript-icon.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 70, height: 70) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
