import React, { Component, PropTypes } from 'react'

export default class Login extends Component {

  renderErrors() {
    const { errors } = this.props;

    return errors.map((error) => {
      return (
          <p style={{color:'red'}}>{error}</p>
      );
    });
  }

  render() {
    return (
        <div>
          <input type='text' ref='username' className="form-control" style={{ marginRight: '5px' }} placeholder='Username'/>
          <input type='password' ref='password' className="form-control" style={{ marginRight: '5px' }} placeholder='Password'/>
          <button onClick={() => this.handleLogin()} className="btn btn-primary">
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