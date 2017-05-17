import React from 'react'
import { Card, Button } from 'react-native-elements'
import PropTypes from 'prop-types'
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

EmployeeAdd.propTypes = {
  name: PropTypes.string,
  phone: PropTypes.string,
  shift: PropTypes.string,
  employeeCreate: PropTypes.func.isRequired,
  employeeUpdate: PropTypes.func.isRequired,
}