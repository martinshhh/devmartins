import React from "react"
import PropTypes from 'prop-types'
import Img from "gatsby-image"

const IntroImageBox = (props) => {
  return (
    <div className="image-container">
      <Img
        fixed={props.image}
        objectFit={props.fit}
        objectPosition={props.position}
        alt={props.alt}
      />
      <div className="image-title">
        <h4>{props.title}</h4>
        <h5>{props.subTitle}</h5>
      </div>
    </div>
  )
}

IntroImageBox.prototypes = {
  props: PropTypes.object
}

export default IntroImageBox