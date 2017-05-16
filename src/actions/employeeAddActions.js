import firebase from 'firebase'
import { Actions } from 'react-native-router-flux'
import {
  EMPLOYEE_CREATE,
  EMPLOYEE_UPDATE,
} from '../constants/actionTypes'

export const employeeCreate = ({ name, phone, shift }) => {
  const { currentUser } = firebase.auth()
  // Workaround for ReduxThunk requirement error
  // Dispatching a fake object, that won't get to reducers
  return (dispatch) => {
    firebase.database()
      .ref(`/users/${currentUser.uid}/employees`)
      .push({ name, phone, shift })
      .then(() => {
        dispatch({ type: EMPLOYEE_CREATE })
        // type: reset ~> instead of advancing animation,
        // returns/go backs to employees
        Actions.employees({ type: 'reset' })
      })
  }
}

export const employeeUpdate = ({ prop, value }) => ({
  type: EMPLOYEE_UPDATE,
  payload: { prop, value }
})
