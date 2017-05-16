import { EMPLOYEES_FETCH_SUCCESS } from '../constants/actionTypes'

export default (state = {}, action) => {
  switch (action.type) {
    case EMPLOYEES_FETCH_SUCCESS:
      return action.payload
    default:
      return state
  }
}