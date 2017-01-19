import { render } from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { reducer } from './reducer/index'
import App from './component/app/App'

const store = createStore(reducer);

const mountPoint = document.createElement('div');
document.body.appendChild(mountPoint);

render(
    <Provider store={store}>
      <App/>
    </Provider>,
    mountPoint
);