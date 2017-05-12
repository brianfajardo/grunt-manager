import {
  EMAIL_CHANGE,
  PASSWORD_CHANGE
} from '../constants/actionTypes'

export const emailChange = input => ({
  type: EMAIL_CHANGE,
  payload: input
})

export const passwordChange = input => ({
  type: PASSWORD_CHANGE,
  payload: input
})