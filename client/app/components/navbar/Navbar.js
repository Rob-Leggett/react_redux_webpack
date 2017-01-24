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

    return (
        <nav className={navBarStyles}>
          <a className={navBarBrandStyles} href="#">User Management App</a>
          <div className='navbar-form'>

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