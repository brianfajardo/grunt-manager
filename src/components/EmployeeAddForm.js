import React, { Component } from 'react'
import { Picker } from 'react-native'
import { Card, FormInput, FormLabel, Button } from 'react-native-elements'
import PropTypes from 'prop-types'

export default EmployeeAddForm = props => {
  const {
    name,
    phone,
    shift,
    employeeUpdate,
    employeeCreate
    } = props

  return (
    <Card>
      <FormLabel>Name</FormLabel>
      <FormInput
        value={name}
        placeholder="Jane Doe"
        onChangeText={value => employeeUpdate({ prop: 'name', value })}
        autoCorrect={false}
      />
      <FormLabel>Phone</FormLabel>
      <FormInput
        value={phone}
        placeholder="000-000-0000"
        onChangeText={value => employeeUpdate({ prop: 'phone', value })}
      />
      <FormLabel>Shift</FormLabel>
      <Picker
        selectedValue={shift}
        onValueChange={value => employeeUpdate({ prop: 'shift', value })}
      >
        <Picker.Item label="Monday" value="Monday" />
        <Picker.Item label="Tuesday" value="Tuesday" />
        <Picker.Item label="Wednesday" value="Wednesday" />
        <Picker.Item label="Thursday" value="Thursday" />
        <Picker.Item label="Friday" value="Friday" />
        <Picker.Item label="Saturday" value="Saturday" />
        <Picker.Item label="Sunday" value="Sunday" />
      </Picker>
      <Button
        title="Add"
        onPress={() => employeeCreate({ name, phone, shift })}
      />
    </Card>
  )
}

EmployeeAddForm.propTypes = {
  name: PropTypes.string,
  phone: PropTypes.string,
  shift: PropTypes.string,
  employeeCreate: PropTypes.func.isRequired,
  employeeUpdate: PropTypes.func.isRequired,
}
