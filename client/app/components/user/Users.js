import React, { Component, PropTypes } from 'react'

export default class Users extends Component {

  render() {
    const { isAuthenticated } = this.props;

    return (
        <div className='container'>
            {!isAuthenticated &&
              <div>Please login first!</div>
            }

            {isAuthenticated &&
              <div>Users</div>
            }
        </div>
    )
  }
}

Users.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};