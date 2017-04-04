import React from 'react'
import thunk from 'redux-thunk'
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { Router } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { createBrowserHistory } from 'history';
import routes from './routes/routes'
import reducer from './reducers/index'

const store = createStore(reducer, applyMiddleware(thunk));

const history = syncHistoryWithStore(createBrowserHistory(), store);

const mountPoint = document.createElement('div');
document.body.appendChild(mountPoint);

render(
    <Provider store={store}>
      <Router history={history} routes={routes} />
    </Provider>,
    mountPoint
);