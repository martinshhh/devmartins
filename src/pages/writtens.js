import React from 'react'
import Link from 'gatsby-link'
import Layout from '../components/PageLayout/index'

const Template = ({ data, location }) => {
  const posts = data.allMarkdownRemark.edges
  return (
    <Layout location={location} crumbLabel="Writtens" page="writtens">
      <div className="default-page-title">
        <h1>Writtens</h1>
      </div>
      <hr></hr>
      <div className="posts-container">
        <ul>
        {
          posts.map((ele) => {
            return (
              <Link to={ele.node.frontmatter.path} key={ele.node.id}>
                <li>
                  <div className="post-icon-container">
                    <img src="https://img.icons8.com/material/4ac144/256/user-male.png/30x30" alt="X"></img>
                  </div>
                  <div>
                    <h5>{ele.node.frontmatter.title}</h5>
                    <span> - </span>
                    <span>{ele.node.frontmatter.date}</span>
                    <p>{ele.node.frontmatter.description}</p>
                  </div>
                </li>
              </Link>
            )
          })
        }
        </ul>
      </div>
    </Layout>
  )
}

export default Template

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