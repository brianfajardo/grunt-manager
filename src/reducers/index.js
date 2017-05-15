import { combineReducers } from 'redux'
import auth from './auth_reducer'
import employeeForm from './employeeForm_reducer'

export default combineReducers({
  auth,
  employeeForm
})