import React from 'react'
import thunk from 'redux-thunk'
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { createBrowserHistory } from 'history';

import reducer from './reducers/index'
import App from "./app";

const store = createStore(reducer, applyMiddleware(thunk));

const history = syncHistoryWithStore(createBrowserHistory(), store);

const mountPoint = document.createElement('div');
document.body.appendChild(mountPoint);

render(
    App(store, history),
    mountPoint
);