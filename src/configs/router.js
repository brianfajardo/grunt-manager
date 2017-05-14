import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import LoginContainer from '../containers/LoginContainer'
import EmployeesContainer from '../containers/EmployeesContainer'

export default () =>
  <Router sceneStyle={{ paddingTop: 65 }}>
    <Scene key="login" component={LoginContainer} title="Login" initial />
    <Scene key="employees" component={EmployeesContainer} title="Employees" />
  </Router>