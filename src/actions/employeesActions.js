import firebase from 'firebase'
import { Actions } from 'react-native-router-flux'
import {
  EMPLOYEE_CREATE,
  EMPLOYEE_UPDATE,
  EMPLOYEES_FETCH_SUCCESS,
  EMPLOYEE_SAVE_SUCCESS
} from '../constants/actionTypes'

export const employeeCreate = ({ name, phone, shift }) => {
  const { currentUser } = firebase.auth()
  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
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

export const employeesFetch = () => {
  const { currentUser } = firebase.auth()
  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
      // On value update/change in this ref, call callback
      // with an object to describe data in there (snapshot)
      .on('value', snapshot => {
        dispatch({
          type: EMPLOYEES_FETCH_SUCCESS,
          payload: snapshot.val()
        })
      })
  }
}

export const employeeSave = (name, phone, shift, uid) => {
  const { currentUser } = firebase.auth()
  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
      .set({ name, phone, shift })
      .then(() => {
        Actions.employees({ type: 'reset' })
        dispatch({ type: EMPLOYEE_SAVE_SUCCESS })
      })
  }
}

export const employeeDelete = uid => {
  const { currentUser } = firebase.auth()
  return () => {
    firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
      .remove()
      .then(() => Actions.employees({ type: 'reset' }))
  }
}