import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Card, FormInput, FormLabel, Button } from 'react-native-elements'
import PropTypes from 'prop-types'

export default EmployeeAddForm = (props) => {
  const { name, phone, shift, employeeUpdate } = props

  return (
    <View>
      <Card>
        <FormLabel>Name</FormLabel>
        <FormInput
          value={name}
          placeholder="Jane Doe"
          onChangeText={value => employeeUpdate({ prop: 'name', value })}
        />
        <FormLabel>Phone</FormLabel>
        <FormInput
          value={phone}
          placeholder="000-000-0000"
          onChangeText={value => employeeUpdate({ prop: 'phone', value })}
        />
        <Button title="Add" />
      </Card>
    </View>
  )
}

EmployeeAddForm.propTypes = {
  name: PropTypes.string,
  phone: PropTypes.string,
  // shift: PropTypes.
  employeeUpdate: PropTypes.func.isRequired
}
