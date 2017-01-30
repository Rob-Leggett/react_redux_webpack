import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'
import Login from '../login/Login'
import Logout from '../logout/Logout'
import style from './navbar.scss';

export default class Navbar extends Component {

  render() {
    const { isAuthenticated, errors, onLogin, onLogout } = this.props;

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
                  onLoginClick={ (creds) => onLogin(creds) }
              />
            }

            {isAuthenticated &&
              <Logout onLogoutClick={() => onLogout()} />
            }

          </div>
        </nav>
    )
  }
}

Navbar.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  errors: PropTypes.arrayOf(PropTypes.string),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired
};