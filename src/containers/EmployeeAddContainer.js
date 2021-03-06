import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import * as actions from '../actions/employeesActions'
import EmployeeAdd from '../components/EmployeeAdd'

class EmployeeAddContainer extends Component {
  render() {
    return <EmployeeAdd {...this.props} />
  }
}

const mapStateToProps = ({ employeeForm: { name, phone, shift } }) => ({
  name, phone, shift
})

EmployeeAddContainer.propTypes = {
  name: PropTypes.string,
  phone: PropTypes.string,
  shift: PropTypes.string,
  employeeCreate: PropTypes.func.isRequired,
  employeeUpdate: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, actions)(EmployeeAddContainer)