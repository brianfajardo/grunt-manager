import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import * as actions from '../actions/employeeAddActions'
import EmployeeAddForm from '../components/EmployeeAddForm'

class EmployeeAddContainer extends Component {

  render() {
    return <EmployeeAddForm {...this.props} />
  }
}

const mapStateToProps = ({ employeeForm: { name, phone, shift } }) => ({
  name, phone, shift
})

EmployeeAddContainer.propTypes = {
  name: PropTypes.string,
  phone: PropTypes.string,
  shift: PropTypes.string,
  employeeUpdate: PropTypes.func.isRequired
}

export default connect(mapStateToProps, actions)(EmployeeAddContainer)