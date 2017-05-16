import { EMPLOYEES_FETCH_SUCCESS } from '../constants/actionTypes'

export default (state = {}, action) => {
  switch (action.type) {
    case EMPLOYEES_FETCH_SUCCESS:
      console.log(action.payload)
    default:
      return state
  }
}