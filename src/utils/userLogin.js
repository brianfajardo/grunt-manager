import { USER_LOGIN_SUCCESS, USER_LOGIN_FAIL } from '../constants/actionTypes'
import { Actions } from 'react-native-router-flux'

export const userLoginSuccess = (dispatch, user) => {
  dispatch({
    type: USER_LOGIN_SUCCESS,
    payload: user
  })
  // on successful login, navigate to main
  // based on router scene & key
  Actions.main()
}

export const userLoginFail = (dispatch, error) => {
  dispatch({
    type: USER_LOGIN_FAIL,
    payload: error.message
  })
}