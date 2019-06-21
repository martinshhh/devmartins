import React from 'react'
import PropTypes from 'prop-types'

import BackgroundComponent from '../Background/BackgroundComponent'
import Navbar from '../Navbar/index'

// Styles
import '../../styles/main.scss'

const Layout = props => {
  return (
    <section id={props.page}>
      <Navbar />
      <BackgroundComponent
        location={props.location}
        crumbLabel={props.crumbLabel}
      >
        {props.children}
      </BackgroundComponent>
    </section>
  )
}

Layout.propTypes = {
  location: PropTypes.object,
  children: PropTypes.object,
  crumbLabel: PropTypes.string,
  page: PropTypes.string,
}

export default Layout
