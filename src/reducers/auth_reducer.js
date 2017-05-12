import {
  EMAIL_CHANGE,
  PASSWORD_CHANGE
} from '../constants/actionTypes'

const INTIIAL_STATE = {
  email: '',
  password: ''
}

export default (state = INTIIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGE:
      return { ...state, email: action.payload }
    case PASSWORD_CHANGE:
      return { ...state, password: action.payload }
    default:
      return state
  }
}