import React, { Component } from 'react'
import { connect } from 'react-redux'
import firebase from 'firebase'
import firebaseConfig from '../configs/firebaseConfig'
import PropTypes from 'prop-types'
import * as actions from '../actions/authActions'
import LoginForm from '../components/LoginForm'

class LoginContainer extends Component {

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

LoginContainer.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  emailChange: PropTypes.func.isRequired,
  passwordChange: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  loginUser: PropTypes.func.isRequired,
  error: PropTypes.string
}

export default connect(mapStateToProps, actions)(LoginContainer)