import React, { Component, PropTypes } from 'react'

export default class Home extends Component {

  render() {
    const { isAuthenticated } = this.props;

    return (
        <div>
          {!isAuthenticated &&
          <div>Welcome to our user management platform</div>
          }

          {isAuthenticated &&
          <div>Welcome (insert name here)  to our user management platform</div>
          }
        </div>
    )
  }
}

Home.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};