import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import classnames from 'classnames'
import style from './home.scss';

class Home extends Component {

  render() {
    const { isAuthenticated } = this.props;

    const navBarHomeStyles = classnames(style.home);

    return (
        <div className={navBarHomeStyles}>
          {!isAuthenticated &&
          <div>Welcome to our user management platform</div>
          }

          {isAuthenticated &&
          <div>Welcome (insert name here)  to our user management platform</div>
          }
        </div>
    )
  }
}

Home.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {

  const { authenticate } = state;
  const { isAuthenticated } = authenticate;

  return {
    isAuthenticated
  }
}

export default connect(mapStateToProps)(Home)