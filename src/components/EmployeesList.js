import React, { Component } from 'react'
import { TouchableWithoutFeedback } from 'react-native'
import { ListItem, Divider } from 'react-native-elements'
import { Actions } from 'react-native-router-flux'
import PropTypes from 'prop-types'

export default class EmployeesList extends Component {

  constructor() {
    super()
    this.onEmployeePress = this.onEmployeePress.bind(this)
  }

  onEmployeePress() {
    Actions.employeeEdit({ employee: { ...this.props } })
  }

  render() {
    const { name, uid } = this.props

    return (
      <TouchableWithoutFeedback onPress={this.onEmployeePress}>
        <ListItem title={name} key={uid} />
      </TouchableWithoutFeedback>
    )
  }
}

EmployeesList.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  shift: PropTypes.string.isRequired,
  uid: PropTypes.string.isRequired
}