import { AUTHENTICATE_ENDPOINT } from '../../constant/constants'

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

// LOGIN

function requestLogin() {
  return {
    type: LOGIN_REQUEST
  }
}

function receiveLogin(user) {
  return {
    type: LOGIN_SUCCESS,
    user
  }
}

function loginError(message) {
  return {
    type: LOGIN_FAILURE,
    message
  }
}

// LOGOUT

function requestLogout() {
  return {
    type: LOGOUT_REQUEST
  }
}

function receiveLogout() {
  return {
    type: LOGOUT_SUCCESS
  }
}

export function login(creds) {

  let config = {
    method: 'POST',
    headers: { 'Content-Type':'application/json' },
    body: JSON.stringify({
      name: creds.username,
      password: creds.password
    })
  };

  return dispatch => {

    dispatch(requestLogin());

    return fetch(AUTHENTICATE_ENDPOINT, config)
        .then(response =>
            response.json().then(user => ({ user, response }))
        ).then(({ user, response }) =>  {
          if (response.ok) {
            localStorage.setItem('token', user.token);
            dispatch(receiveLogin(user))
          } else {
            dispatch(loginError(user.error));
            return Promise.reject(user)
          }
        }).catch(err => console.log("Error: ", err))
  }
}

export function logout() {
  return dispatch => {
    dispatch(requestLogout());
    localStorage.removeItem('token');
    dispatch(receiveLogout())
  }
}