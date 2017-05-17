import React from 'react'
import { View, Picker } from 'react-native'
import { FormLabel, FormInput } from 'react-native-elements'

export default EmployeeForm = props => {
  const { name, phone, shift, employeeUpdate } = props

  return (
    <View>
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
    </View>
  )
}