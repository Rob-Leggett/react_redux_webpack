import { CUSTOMER_ENDPOINT } from '../../constant/constants';

fetch(CUSTOMER_ENDPOINT)
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      console.log(response);
    });

// https://auth0.com/blog/secure-your-react-and-redux-app-with-jwt-authentication/
// http://redux.js.org/docs/api/createStore.html