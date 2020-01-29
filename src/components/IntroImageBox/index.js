import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

const IntroImageBox = props => {
  return (
    <div className="image-container">
      <Img
        fixed={props.image}
        objectFit={props.fit}
        objectPosition={props.position}
        alt={props.alt}
      />
      <div className="image-title">
        <span>{props.title}</span>
        <span> </span>
        <span>{props.subTitle}</span>
      </div>
    </div>
  )
}

IntroImageBox.prototypes = {
  props: PropTypes.object,
}

IntroImageBox.propTypes = {
  image: PropTypes.object,
  fit: PropTypes.string,
  position: PropTypes.string,
  alt: PropTypes.string,
  title: PropTypes.string,
  subTitle: PropTypes.string,
}

export default IntroImageBox
