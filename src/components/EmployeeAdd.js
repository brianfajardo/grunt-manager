import React from 'react'
import { Card, Button } from 'react-native-elements'
import PropTypes from 'prop-types'
import EmployeeForm from './EmployeeForm'

export default EmployeeAdd = props => {
  const { name, phone, shift, employeeCreate } = props

  return (
    <Card>
      <EmployeeForm {...props} />
      <Button
        title="Add"
        onPress={() => employeeCreate({ name, phone, shift })}
      />
    </Card>
  )
}

EmployeeAdd.propTypes = {
  name: PropTypes.string,
  phone: PropTypes.string,
  shift: PropTypes.string,
  employeeCreate: PropTypes.func.isRequired,
  employeeUpdate: PropTypes.func.isRequired,
}