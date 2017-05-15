import React from 'react'
import { Router, Scene, Actions } from 'react-native-router-flux'
import LoginContainer from '../containers/LoginContainer'
import EmployeesContainer from '../containers/EmployeesContainer'
import EmployeeAddContainer from '../containers/EmployeeAddContainer'

export default () =>
  <Router sceneStyle={{ paddingTop: 65 }}>

    <Scene key="auth">
      <Scene
        key="login"
        title="Login"
        component={LoginContainer}
        initial
      />
    </Scene>

    <Scene key="main">
      <Scene
        key="employees"
        title="Employees"
        component={EmployeesContainer}
        initial
        rightTitle="Add"
        onRight={() => Actions.employeeAdd()}
      />
      <Scene
        key="employeeAdd"
        title="Add Employee"
        component={EmployeeAddContainer}
      />
    </Scene>

  </Router>