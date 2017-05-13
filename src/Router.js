import React from 'react'
import { Scene, Router } from 'react-native-router-flux'

import UserLogin from './containers/UserLogin'
import Employees from './containers/Employees'

export default () =>
  <Router sceneStyle={{ paddingTop: 65 }}>
    <Scene key="loginPage" component={UserLogin} title="Login" />
    <Scene key="employeesPage" component={Employees} title="Employees" initial />
  </Router>