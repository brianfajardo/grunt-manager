import React, { Component } from 'react'
import { connect } from 'react-redux'
import firebase from 'firebase'
import firebaseConfig from '../firebaseConfig'
import PropTypes from 'prop-types'
import * as actions from '../actions'

import LoginForm from '../components/LoginForm'

class UserLogin extends Component {

  componentWillMount() {
    firebase.initializeApp(firebaseConfig)
  }

  render() {
    return <LoginForm {...this.props} />
  }
}

const mapStateToProps = ({ auth }) => {
  const { email, password, isLoading, error } = auth
  return { email, password, isLoading, error }
}

LoginForm.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  emailChange: PropTypes.func.isRequired,
  passwordChange: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  loginUser: PropTypes.func.isRequired,
  error: PropTypes.string
}

export default connect(mapStateToProps, actions)(UserLogin)