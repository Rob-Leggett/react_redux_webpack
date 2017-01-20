import React, { Component, PropTypes } from 'react'
import Login from '../login/Login'
import Logout from '../logout/Logout'
import { login, logout } from '../../actions/authenticate/actions'

export default class Navbar extends Component {

  render() {
    const { dispatch, isAuthenticated, errors } = this.props;

    return (
        <nav className='navbar navbar-default'>
          <div className='container-fluid'>
            <a className="navbar-brand" href="#">User Management App</a>
            <div className='navbar-form'>

              {!isAuthenticated &&
                <Login
                    errors={errors}
                    onLoginClick={ creds => dispatch(login(creds)) }
                />
              }

              {isAuthenticated &&
                <Logout onLogoutClick={() => dispatch(logout())} />
              }

            </div>
          </div>
        </nav>
    )
  }
}

Navbar.propTypes = {
  dispatch: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  errors: PropTypes.arrayOf(PropTypes.string)
};