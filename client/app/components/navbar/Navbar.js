import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router';

import classnames from 'classnames'
import Login from '../login/Login'
import Logout from '../logout/Logout'
import Menu from '../menu/Menu'
import style from './navbar.scss';
import * as AuthActionsCreators from '../../actions/authenticate/actions'

class Navbar extends Component {

  render() {
    const { isAuthenticated, errors, authActions } = this.props;

    const navBarStyles = classnames(style.navbar);
    const navBarBrandStyles = classnames(style.brand);
    const navBarFormStyles = classnames(style.form);

    return (
        <nav className={navBarStyles}>
          <div className={navBarBrandStyles}>
            <a href="#">User Management App</a>
          </div>
          <div className={navBarFormStyles}>
            {!isAuthenticated &&
              <Login
                  errors={errors}
                  onLoginClick={ authActions.login }
              />
            }
            {isAuthenticated &&
              <Logout onLogoutClick={ authActions.logout } />
            }
          </div>
          <Menu isAuthenticated={isAuthenticated}/>
        </nav>
    )
  }
}

Navbar.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  errors: PropTypes.arrayOf(PropTypes.string)
};

function mapStateToProps(state) {

  const { authenticate } = state;
  const { isAuthenticated, errors } = authenticate;

  return {
    isAuthenticated,
    errors
  }
}

function mapDispatchToProps(dispatch) {
  return {
    authActions: bindActionCreators(AuthActionsCreators, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)