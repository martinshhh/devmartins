import React from 'react';
import { Link, StaticQuery, graphql } from "gatsby"
import PropTypes from 'prop-types'

class NavbarComponent extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    const siteData = this.props.siteData.site.siteMetadata
    return (
      <header>
        <div className="navbar-container">
          <div className="navbar-title">
            <h1 className="mt-2">
              <Link to="/#">{siteData.title}</Link>
            </h1>
          </div>
          <nav>
            <ul>
              <li><Link activeClassName="active-link" to="/about">Who am i</Link></li>
              <li><Link partiallyActive={true} activeClassName="active-link" to="/writtens">Writtens</Link></li>
              <li><Link activeClassName="active-link" to="/#">Contact me</Link></li>
            </ul>
          </nav>
        </div>
      </header>
    )
  }
}

export default props => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={(data) => <NavbarComponent siteData={data} {...props} />}
  />
);

NavbarComponent.propTypes = {
  siteData: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
}