import { EMPLOYEE_UPDATE } from '../constants/actionTypes'

export const employeeUpdate = ({ prop, value }) => ({
  type: EMPLOYEE_UPDATE,
  payload: { prop, value }
})