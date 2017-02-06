import React from 'react'
import { Route } from 'react-router'

import AppContainer from '../containers/App'
import Home from '../components/home/Home'
import Users from '../components/user/Users'

const routes = (
    <Route path='/' component={AppContainer}>
      <Route path='/home' component={Home} />
      <Route path='/users' component={Users} />
    </Route>
);

export default routes