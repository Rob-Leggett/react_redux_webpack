import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'
import commonStyle from '../common/common.scss';

export default class Logout extends Component {

  render() {
    const { onLogoutClick } = this.props;

    const buttonStyles = classnames(commonStyle.btn);

    return (
        <button onClick={() => onLogoutClick()} className={buttonStyles}>
          Logout
        </button>
    )
  }

}

Logout.propTypes = {
  onLogoutClick: PropTypes.func.isRequired
};