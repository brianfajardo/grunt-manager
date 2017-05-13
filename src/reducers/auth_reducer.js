import {
  EMAIL_CHANGE,
  PASSWORD_CHANGE,
  USER_LOGIN_SUCCESS
} from '../constants/actionTypes'

const INTIIAL_STATE = {
  email: '',
  password: '',
  user: null
}

export default (state = INTIIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGE:
      return { ...state, email: action.payload }
    case PASSWORD_CHANGE:
      return { ...state, password: action.payload }
    case USER_LOGIN_SUCCESS:
      return { ...state, user: action.payload }
    default:
      return state
  }
}