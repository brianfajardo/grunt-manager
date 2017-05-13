import {
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL
} from '../constants/actionTypes'

export const userLoginSuccess = (dispatch, user) => {
  dispatch({
    type: USER_LOGIN_SUCCESS,
    payload: user
  })
}

export const userLoginFail = dispatch => {
  dispatch({ type: USER_LOGIN_FAIL })
}