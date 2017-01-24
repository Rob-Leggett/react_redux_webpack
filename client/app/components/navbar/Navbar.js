import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'
import Login from '../login/Login'
import Logout from '../logout/Logout'
import style from './navbar.scss';

export default class Navbar extends Component {

  render() {
    const { isAuthenticated, errors, onLogin, onLogout } = this.props;

    const navBarStyles = classnames(style.navbar);

    return (
        <nav className={navBarStyles}>
          <div className='container-fluid'>
            <a className="navbar-brand" href="#">User Management App</a>
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