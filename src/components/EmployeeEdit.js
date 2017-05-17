import React from 'react'
import { Card, Button } from 'react-native-elements'
import EmployeeForm from './EmployeeForm'

export default EmployeeEdit = props => {
  return (
    <Card>
      <EmployeeForm {...this.props} />
      <Button
        title="Save"
        onPress={() => this.props.employeeCreate({ name, phone, shift })}
      />
    </Card>
  )
}