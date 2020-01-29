import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

const HomePostsList = props => {
  return (
    <div className="lists-container">
      <ul className="posts-list">
        {props.posts.map(ele => {
          return (
            <Link
              key={ele.node.frontmatter.path}
              to={ele.node.frontmatter.path}
            >
              <li className="post-container" key={ele.node.id}>
                <div className="row w-100">
                  <div className="col-11">
                    <div className="row">
                      <div className="col-12">
                        <span className="title-text">
                          {ele.node.frontmatter.title}
                        </span>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <span className="description-text">
                          {ele.node.frontmatter.description}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-1 d-flex align-items-center justify-content-center">
                    <span className="goto-icon" role="img" aria-label="go-to">
                      &gt;
                    </span>
                  </div>
                </div>
              </li>
            </Link>
          )
        })}
      </ul>
      <div className="d-flex justify-content-end more-writtens">
        <Link
          partiallyActive={true}
          activeClassName="active-link"
          to="/writtens"
        >
          Full list of my writtens...
        </Link>
      </div>
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
