import React from 'react';
import { render } from 'react-dom';
import { CUSTOMER_ENDPOINT } from './constant/apiConstant';

fetch(CUSTOMER_ENDPOINT)
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      console.log(response);
    });

class App extends React.Component {
  render () {
    return <p> Hello React!</p>;
  }
}

const mountPoint = document.createElement('div');
document.body.appendChild(mountPoint);

render(<App/>, mountPoint);