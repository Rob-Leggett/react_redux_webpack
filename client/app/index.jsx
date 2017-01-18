import React from 'react';
import {render} from 'react-dom';

class App extends React.Component {
  render () {
    return <p> Hello React!</p>;
  }
}

const mountPoint = document.createElement('div');
document.body.appendChild(mountPoint);

render(<App/>, mountPoint);