import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'
import commonStyle from '../common/common.scss';

export default class Login extends Component {

  renderErrors() {
    const { errors } = this.props;

    const errorStyles = classnames(commonStyle.error);

    return errors.map((error, i) => {
      return (
          <p key={i} className={errorStyles}>{error}</p>
      );
    });
  }

  render() {
    const formControlStyles = classnames(commonStyle.formControl);
    const buttonStyles = classnames(commonStyle.btn);

    return (
        <div>
          <input type='text' ref='username' className={formControlStyles} placeholder='Username'/>
          <input type='password' ref='password' className={formControlStyles} placeholder='Password'/>
          <button onClick={() => this.handleLogin()} className={buttonStyles}>
            Login
          </button>

          {this.renderErrors()}
        </div>
    )
  }

  handleLogin() {
    const { onLoginClick } = this.props;

    const credentials = {
      username: this.refs.username.value.trim(),
      password: this.refs.password.value.trim()
    };

    onLoginClick(credentials)
  }
}

Login.propTypes = {
  onLoginClick: PropTypes.func.isRequired,
  errors: PropTypes.arrayOf(PropTypes.string)
};