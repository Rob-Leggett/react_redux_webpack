import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import classnames from 'classnames'
import style from './app.scss';
import Navbar from '../components/navbar/Navbar'
import * as AuthActions from '../actions/authenticate/actions'

export class App extends Component {
  render () {
    const { isAuthenticated, errors, authActions } = this.props;

    const appStyles = classnames(style.app);

    console.log(this.props);

    return (
        <div className={appStyles}>
          <Navbar
              isAuthenticated={isAuthenticated}
              errors={errors}
              onLogin={authActions.login}
              onLogout={authActions.logout} />
          <div>
              { this.props.children }
          </div>
        </div>
    )
  }
}

// https://css-tricks.com/learning-react-router/
// https://github.com/StevenIseki/react-router-redux-example
// https://scotch.io/tutorials/routing-react-apps-the-complete-guide
// https://github.com/ReactTraining/react-router/issues/676 # react route refresh issue
// TODO: fix project wince updating libraries
// TODO: remove extractText from scss as live reload not supported

// https://www.webpackbin.com/bins/-Kf5cpLcax4dttAEvkCW
// https://www.npmjs.com/package/connected-react-router

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