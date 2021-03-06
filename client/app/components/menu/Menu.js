import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router-dom';
import classnames from 'classnames'
import style from './menu.scss';

export default class Menu extends Component {

  render() {
    const navBarMenuStyles = classnames(style.menu);

    return (
        <div className={navBarMenuStyles}>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/users">Users</Link></li>
          </ul>
        </div>
    )
  }
}