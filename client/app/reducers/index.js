import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import authenticate from './authenticate'

export default combineReducers({
  authenticate,
  routing: routerReducer
});