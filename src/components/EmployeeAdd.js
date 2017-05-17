import React from 'react'
import { Card, Button } from 'react-native-elements'
import EmployeeForm from './EmployeeForm'

export default EmployeeAdd = props => {
  return (
    <Card>
      <EmployeeForm {...this.props} />
      <Button
        title="Add"
        onPress={() => this.props.employeeCreate({ name, phone, shift })}
      />
    </Card>
  )
}
