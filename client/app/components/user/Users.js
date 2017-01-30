import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'
import style from './users.scss';

export default class Users extends Component {

  render() {
    const { isAuthenticated } = this.props;

    const usersStyles = classnames(style.users);

    return (
        <div className={usersStyles}>
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