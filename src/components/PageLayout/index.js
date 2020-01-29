import React from 'react'
import PropTypes from 'prop-types'

import BackgroundComponent from '../Background/BackgroundComponent'
import Navbar from '../Navbar/index'

// Styles
import '../../styles/main.scss'

const Layout = props => {
  return (
    <section className="theme-light" id={props.page}>
      <Navbar />
      <BackgroundComponent
        title={props.title}
        titleMainClass={props.titleMainClass}
        titleSubClass={props.titleSubClass}
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
  children: PropTypes.array,
  crumbLabel: PropTypes.string,
  page: PropTypes.string,
  title: PropTypes.string,
  titleMainClass: PropTypes.string,
  titleSubClass: PropTypes.string,
}

export default Layout
