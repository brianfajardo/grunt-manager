import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import LoginContainer from '../containers/LoginContainer'
import EmployeesContainer from '../containers/EmployeesContainer'

export default () =>
  <Router sceneStyle={{ paddingTop: 65 }}>
    <Scene key="auth">
      <Scene
        key="login"
        title="Login"
        component={LoginContainer}
      />
    </Scene>
    <Scene key="main">
      <Scene
        key="employees"
        title="Employees"
        component={EmployeesContainer}
        initial />
    </Scene>
  </Router>