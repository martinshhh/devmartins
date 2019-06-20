import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import { Breadcrumb } from 'gatsby-plugin-breadcrumb'

import BackgroundImage from 'gatsby-background-image'

const BackgroundComponent = (props) => (
    <StaticQuery query={graphql`
      query {
        desktop: file(relativePath: { eq: "background.jpeg" }) {
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
       return (
          <BackgroundImage Tag="section"
            className={props.className}
            fluid={imageData}
            backgroundColor={`#040e18`}
            style={{
              height: '100%',
              display: 'flex'
            }}
          >
            <div className="breadcrumb-container">
              {props.location && props.crumbLabel && (
                <Breadcrumb
                  location={props.location}
                  crumbLabel={props.crumbLabel}
                />
              )}                
            </div>
            <div className="container main-container">
              {props.children}
            </div>
          </BackgroundImage>
       )
     }
     }
    />
)

export default BackgroundComponent