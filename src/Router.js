import React from 'react'
import { Text, View } from 'react-native';
import { Scene, Router } from 'react-native-router-flux'

import UserLogin from './containers/UserLogin'

export default () =>
  <Router>
    <Scene key="login" component={UserLogin} title="Please Login" />
  </Router>