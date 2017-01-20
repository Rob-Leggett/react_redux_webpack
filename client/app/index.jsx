import { render } from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { reducer } from './reducers/index'
import App from './components/app/App'

const store = createStore(reducer);

const mountPoint = document.createElement('div');
document.body.appendChild(mountPoint);

render(
    <Provider store={store}>
      <App/>
    </Provider>,
    mountPoint
);