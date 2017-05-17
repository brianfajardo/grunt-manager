import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, Button } from 'react-native-elements'
import { employeeUpdate, employeeSave } from '../actions/employeesActions'
import _ from 'lodash'
import PropTypes from 'prop-types'
import EmployeeForm from './EmployeeForm'

class EmployeeEdit extends Component {

  // Iterate over every prop of the employee provided
  // by router Actions and update the employee form
  // to reflect information when going to update
  // employee.

  componentWillMount() {
    _.each(this.props.employee, (value, prop) => {
      this.props.employeeUpdate({ prop, value })
    })
  }

  render() {
    const {
      name,
      phone,
      shift,
      employeeSave,
      employee: { uid }
     } = this.props

    return (
      <Card>
        <EmployeeForm {...this.props} />
        <Button
          title="Save"
          onPress={() => employeeSave(name, phone, shift, uid)}
        />
      </Card>
    )
  }
}

const mapStateToProps = ({ employeeForm: { name, phone, shift } }) => ({
  name, phone, shift
})

EmployeeEdit.propTypes = {
  // React Native Router FLux props
  employee: PropTypes.shape({
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    shift: PropTypes.string.isRequired,
    uid: PropTypes.string.isRequired
  }),
  // mapStateToProps
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  shift: PropTypes.string.isRequired,
  employeeUpdate: PropTypes.func.isRequired,
  employeeSave: PropTypes.func.isRequired
}

export default connect(mapStateToProps, {
  employeeUpdate, employeeSave
})(EmployeeEdit)