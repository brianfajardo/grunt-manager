import {
  EMPLOYEE_CREATE,
  EMPLOYEE_UPDATE
} from '../constants/actionTypes'

// Defaulting init state shift to Monday
// Picker requires a default value

const INITIAL_STATE = {
  name: '',
  phone: '',
  shift: 'Monday'
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_CREATE:
      return { ...state, ...INITIAL_STATE }
    case EMPLOYEE_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value }
    default:
      return state
  }
}