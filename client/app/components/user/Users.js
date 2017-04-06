import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import classnames from 'classnames'
import style from './users.scss';

class Users extends Component {

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

function mapStateToProps(state) {

  const { authenticate } = state;
  const { isAuthenticated } = authenticate;

  return {
    isAuthenticated
  }
}

export default connect(mapStateToProps)(Users)