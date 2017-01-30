import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import classnames from 'classnames'
import style from './app.scss';
import Navbar from '../components/navbar/Navbar'
import Users from '../components/user/Users'
import * as AuthActions from '../actions/authenticate/actions'

export class App extends Component {
  render () {
    const { isAuthenticated, errors, authActions } = this.props;

    const appStyles = classnames(style.app);

    return (
        <div className={appStyles}>
          <Navbar
              isAuthenticated={isAuthenticated}
              errors={errors}
              onLogin={authActions.login}
              onLogout={authActions.logout}
          />
          <Users
              isAuthenticated={isAuthenticated}
          />
        </div>
    )
  }
}

App.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  errors: PropTypes.arrayOf(PropTypes.string),
  authActions: PropTypes.object
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
    authActions: bindActionCreators(AuthActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)