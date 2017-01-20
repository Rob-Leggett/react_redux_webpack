import React, { Component, PropTypes } from 'react'
import Login from '../login/Login'
import Logout from '../logout/Logout'

export default class Navbar extends Component {

  render() {
    const { isAuthenticated, errors, onLogin, onLogout } = this.props;

    return (
        <nav className='navbar navbar-default'>
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