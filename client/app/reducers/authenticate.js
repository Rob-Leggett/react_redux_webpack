import {
  LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_REQUEST, LOGOUT_SUCCESS
} from '../actions/authenticate/actions'

const initialState = {
  isFetching: false,
  isAuthenticated: !!localStorage.getItem('token'),
  errors: []
};

export default function authenticate(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        isAuthenticated: false,
        errors: []
      });
    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: true,
        user: action.user
      });
    case LOGIN_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: false,
        errors: [action.message]
      });
    case LOGOUT_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        errors: []
    });
    case LOGOUT_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: false
      });
    default:
      return state
  }
}