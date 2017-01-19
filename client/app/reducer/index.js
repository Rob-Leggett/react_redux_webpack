import { combineReducers } from 'redux'
import users from './users'
import authentication from './authentication'

export default combineReducers({
  users,
  authentication
})