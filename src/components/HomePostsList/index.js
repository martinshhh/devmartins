import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

const HomePostsList = props => {
  return (
    <div className="lists-container">
      <ul className="left-side-list">
        {props.posts.map((ele, ind) => {
          if (ind % 2 === 0) {
            return (
              <Link to={ele.node.frontmatter.path}>
                <li className="post-container" key={ele.node.id}>
                  {ele.node.frontmatter.title}
                </li>
              </Link>
            )
          } else return null
        })}
      </ul>
      <ul className="right-side-list">
        {props.posts.map((ele, ind) => {
          if (ind % 2 !== 0) {
            return (
              <Link to={ele.node.frontmatter.path}>
                <li className="post-container" key={ele.node.id}>
                  {ele.node.frontmatter.title}
                </li>
              </Link>
            )
          } else return null
        })}
      </ul>
    </div>
  )
}

HomePostsList.prototypes = {
  props: PropTypes.object,
}
HomePostsList.propTypes = {
  posts: PropTypes.array,
}

export default HomePostsList
