import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Navbar from '../navbar/Navbar'

export class App extends Component {
  render () {
    const { dispatch, isAuthenticated, errors } = this.props;
    return (
        <div>
          <Navbar
              isAuthenticated={isAuthenticated}
              errors={errors}
              dispatch={dispatch}
          />
          <div className='container'>
            Hello Y'all
          </div>
        </div>
    )
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
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

export default connect(mapStateToProps)(App)