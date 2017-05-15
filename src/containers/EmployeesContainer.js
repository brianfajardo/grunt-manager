import React, { Component } from 'react'
import { connect } from 'react-redux'
import EmployeesList from '../components/EmployeesList'

export default class EmployeesContainer extends Component {
  render() {
    return <EmployeesList />
  }
}