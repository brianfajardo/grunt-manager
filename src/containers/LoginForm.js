import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import {
  FormLabel,
  FormInput,
  Button,
  FormValidationMessage
} from 'react-native-elements'
import PropTypes from 'prop-types'
import * as actions from '../actions'

import Spinner from '../components/Spinner'

class LoginForm extends Component {

  constructor() {
    super()
    this.onEmailChange = this.onEmailChange.bind(this)
    this.onPasswordChange = this.onPasswordChange.bind(this)
    this.onButtonPress = this.onButtonPress.bind(this)
  }

  onEmailChange(input) {
    this.props.emailChange(input)
  }

  onPasswordChange(input) {
    this.props.passwordChange(input)
  }

  onButtonPress() {
    const { email, password, loginUser } = this.props
    loginUser(email, password)
  }

  renderButton() {
    return (
      this.props.isLoading
        ? <Spinner size={'large'} color={'#51DD8D'} />
        : <Button
          title="Login"
          onPress={this.onButtonPress}
          buttonStyle={style.buttonStyle}
        />
    )
  }

  render() {
    const { email, password, error } = this.props
    const {
      buttonContainer,
      errorContainerStyle,
      errorTextStyle
     } = style

    return (
      <View>
        <View>
          <FormLabel>Email</FormLabel>
          <FormInput
            value={email}
            onChangeText={this.onEmailChange}
            autoCapitalize={'none'}
            autoCorrect={false}
          />
          <FormLabel>Password</FormLabel>
          <FormInput
            value={password}
            onChangeText={this.onPasswordChange}
            secureTextEntry={true}
          />
        </View>
        <View style={errorContainerStyle}>
          <FormValidationMessage
            labelStyle={errorTextStyle}
          >
            {error}
          </FormValidationMessage>
        </View>
        <View style={buttonContainer}>
          {this.renderButton()}
        </View>
      </View>
    )
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

const style = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    marginTop: 50
  },
  buttonStyle: {
    borderRadius: 20,
    width: 150
  },
  errorContainerStyle: {
    alignItems: 'center'
  },
  errorTextStyle: {
    fontSize: 16
  }
})

export default connect(mapStateToProps, actions)(LoginForm)