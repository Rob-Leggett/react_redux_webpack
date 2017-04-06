import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router';

import classnames from 'classnames'
import Login from '../login/Login'
import Logout from '../logout/Logout'
import Menu from '../menu/Menu'
import style from './navbar.scss';
import {login, logout } from '../../actions/authenticate/actions'

class Navbar extends Component {

  render() {
    const { isAuthenticated, errors } = this.props;

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
                  onLoginClick={ (creds) => login(creds) }
              />
            }
            {isAuthenticated &&
              <Logout onLogoutClick={() => logout()} />
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

export default connect(mapStateToProps)(Navbar)