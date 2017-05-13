import React, { Component } from 'react'
import { connect } from 'react-redux'

import EmployeeList from '../components/EmployeeList'

export default class Employees extends Component {
  render() {
    return <EmployeeList />
  }
}