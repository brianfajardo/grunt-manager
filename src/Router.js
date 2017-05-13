import React from 'react'
import { Scene, Router } from 'react-native-router-flux'

import UserLogin from './containers/UserLogin'

// sceneStyle kinda like a global style

export default () =>
  <Router sceneStyle={{ paddingTop: 65 }}>
    <Scene key="login" component={UserLogin} title="Please Login" />
  </Router>