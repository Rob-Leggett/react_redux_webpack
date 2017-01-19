/**
 * Created by leggettr2 on 19/1/17.
 */
const initialState = {

};

export default function authenticate(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state
  }
}