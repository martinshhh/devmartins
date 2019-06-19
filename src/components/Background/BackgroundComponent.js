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
       console.log('props', props);
       // Set ImageData.
       const imageData = data.desktop.childImageSharp.fluid
       let breadCrumb = null
       if (props.location && props.crumbLabel) {
        breadCrumb = [
          <Breadcrumb
          location={props.location}
          crumbLabel={props.crumbLabel}
        />
          ]
       }
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
              {breadCrumb}                           
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