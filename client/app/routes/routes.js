import React from 'react'

import Home from '../components/home/Home'
import Users from '../components/user/Users'

const routes = [
  {
    'path':'/',
    'component': Home,
    'exact': true
  },
  {
    'path':'/users',
    'component': Users
  }
];

export default routes;