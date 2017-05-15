import {
  EMAIL_CHANGE,
  PASSWORD_CHANGE,
  USER_LOGIN,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL
} from '../constants/actionTypes'

const INTIIAL_STATE = {
  email: '',
  password: '',
  isLoading: false,
  user: null,
  error: ''
}

export default (state = INTIIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGE:
      return { ...state, email: action.payload }
    case PASSWORD_CHANGE:
      return { ...state, password: action.payload }
    case USER_LOGIN:
      return { ...state, isLoading: true, error: '' }
    case USER_LOGIN_SUCCESS:
      return { ...state, ...INTIIAL_STATE, user: action.payload }
    case USER_LOGIN_FAIL:
      return { ...state, password: '', isLoading: false, error: action.payload }
    default:
      return state
  }
}