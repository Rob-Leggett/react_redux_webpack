import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Navbar from '../../components/navbar/Navbar'
import * as AuthActions from '../../actions/authenticate/actions'

export class App extends Component {
  render () {
    const { isAuthenticated, errors, authActions } = this.props;
    return (
        <div>
          <Navbar
              isAuthenticated={isAuthenticated}
              errors={errors}
              onLogin={authActions.login}
              onLogout={authActions.logout}
          />
          <div className='container'>
            Hello Y'all
          </div>
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