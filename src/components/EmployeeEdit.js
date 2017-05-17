import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, Button } from 'react-native-elements'
import * as actions from '../actions/employeesActions'
import _ from 'lodash'
import PropTypes from 'prop-types'
import Communications from 'react-native-communications'
import EmployeeForm from './EmployeeForm'
import ConfirmModal from './ConfirmModal'

class EmployeeEdit extends Component {

  constructor() {
    super()
    this.state = { showModal: false }
    this.onSavePress = this.onSavePress.bind(this)
    this.onTextPress = this.onTextPress.bind(this)
    this.onFirePress = this.onFirePress.bind(this)
    this.onAcceptPress = this.onAcceptPress.bind(this)
    this.onDeclinePress = this.onDeclinePress.bind(this)
  }

  // Iterate over every prop of the employee provided
  // by router Actions and update the employee form
  // to reflect information when going to update
  // employee.

  componentWillMount() {
    _.each(this.props.employee, (value, prop) => {
      this.props.employeeUpdate({ prop, value })
    })
  }

  onSavePress() {
    const {
      name,
      phone,
      shift,
      employeeSave,
      employee: { uid }
    } = this.props
    employeeSave(name, phone, shift, uid)
  }

  onTextPress() {
    const { phone, shift } = this.props
    Communications.text(phone, `Your upcoming shift is on ${shift}`)
  }

  onFirePress() {
    this.setState({ showModal: true })
  }

  onAcceptPress() {
    const { employeeDelete, employee: { uid } } = this.props
    employeeDelete(uid)
  }

  onDeclinePress() {
    this.setState({ showModal: false })
  }

  render() {
    return (
      <Card>
        <EmployeeForm {...this.props} />
        <Button title="Update Changes" onPress={this.onSavePress} />
        <Button title="Text Schedule" onPress={this.onTextPress} />
        <Button title="Fire" onPress={this.onFirePress} />
        <ConfirmModal
          visible={this.state.showModal}
          title="Are you sure you want to fire this employee?"
          onAcceptPress={this.onAcceptPress}
          onDeclinePress={this.onDeclinePress}
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
  // actions
  employeeUpdate: PropTypes.func.isRequired,
  employeeSave: PropTypes.func.isRequired,
  employeeDelete: PropTypes.func.isRequired
}

export default connect(mapStateToProps, actions)(EmployeeEdit)