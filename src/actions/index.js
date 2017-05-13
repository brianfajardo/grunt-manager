import firebase from 'firebase'
import {
  EMAIL_CHANGE,
  PASSWORD_CHANGE,
  USER_LOGIN
} from '../constants/actionTypes'
import {
  userLoginSuccess,
  userLoginFail
} from '../utils/userLogin'

export const emailChange = input => ({
  type: EMAIL_CHANGE,
  payload: input
})

export const passwordChange = input => ({
  type: PASSWORD_CHANGE,
  payload: input
})

export const loginUser = (email, password) => {
  return (dispatch) => {
    dispatch({ type: USER_LOGIN })
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => userLoginSuccess(dispatch, user))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(user => userLoginSuccess(dispatch, user))
          .catch(() => userLoginFail(dispatch))
      })
  }
}