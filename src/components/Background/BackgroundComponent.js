import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import { Breadcrumb } from 'gatsby-plugin-breadcrumb'
import PropTypes from 'prop-types'

import BackgroundImage from 'gatsby-background-image'

const BackgroundComponent = props => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "background.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 500, quality: 100) {
              ...GatsbyImageSharpFluid
              presentationWidth
            }
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.
      const imageData = data.desktop.childImageSharp.fluid
      let title = null
      if (props.location && props.crumbLabel) {
        title = (
          <Breadcrumb
            location={props.location}
            crumbLabel={props.crumbLabel}
            crumbSeparator=" "
            crumbStyle={{ color: '#878787', textTransform: 'none' }}
            crumbActiveStyle={{ color: '#878787' }}
          />
        )
      } else {
        title = props.title
      }
      return (
        // ! Image keeps flickering when there's a page refresh
        <BackgroundImage
          Tag="section"
          className={props.className}
          fluid={imageData}
          // backgroundColor={'#040e18'}
          style={{
            height: '100%',
            display: 'flex',
          }}
        >
          <div className="container main-container">
            <div className={props.titleMainClass}>
              <div className={props.titleSubClass}>
                <h1>{title}</h1>
              </div>
            </div>
            {props.children}
          </div>
        </BackgroundImage>
      )
    }}
  />
)

export default BackgroundComponent

BackgroundComponent.propTypes = {
  location: PropTypes.object,
  crumbLabel: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.array,
  title: PropTypes.string,
  titleMainClass: PropTypes.string,
  titleSubClass: PropTypes.string,
}
