import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import classnames from 'classnames'
import style from './home.scss';

class Home extends Component {

  render() {
    const { isAuthenticated, user } = this.props;

    const navBarHomeStyles = classnames(style.home);

    return (
        <div className={navBarHomeStyles}>
          {!isAuthenticated &&
          <div>Welcome to our user management platform</div>
          }

          {isAuthenticated &&
          <div>Welcome <b>{user.name}</b> to our user management platform</div>
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
  const { isAuthenticated, user } = authenticate;

  return {
    isAuthenticated,
    user
  }
}

export default connect(mapStateToProps)(Home)