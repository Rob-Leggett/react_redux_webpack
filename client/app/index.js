import React from 'react'
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import reducer from './reducers/index'
import App from './containers/App'

const store = createStore(reducer, applyMiddleware(thunk));

const mountPoint = document.createElement('div');
document.body.appendChild(mountPoint);

render(
    <Provider store={store}>
      <App/>
    </Provider>,
    mountPoint
);