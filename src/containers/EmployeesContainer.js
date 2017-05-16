import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { employeesFetch } from '../actions/employeesActions'
import EmployeesList from '../components/EmployeesList'

class EmployeesContainer extends Component {

  componentWillMount() {
    this.props.employeesFetch()
  }

  render() {
    return <EmployeesList {...this.props} />
  }
}

EmployeesContainer.propTypes = {
  employeesFetch: PropTypes.func.isRequired
}

export default connect(null, { employeesFetch })(EmployeesContainer)