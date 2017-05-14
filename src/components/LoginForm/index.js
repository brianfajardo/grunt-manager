import React, { Component } from 'react'
import { View } from 'react-native'
import {
  FormLabel,
  FormInput,
  Button,
  FormValidationMessage
} from 'react-native-elements'
import styles from './styles'
import PropTypes from 'prop-types'
import Spinner from '../Spinner'

export default class LoginForm extends Component {

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
          buttonStyle={styles.buttonStyle}
        />
    )
  }

  render() {
    const { email, password, error } = this.props
    const { buttonContainer, errorContainerStyle, errorTextStyle } = styles

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
          <FormValidationMessage labelStyle={errorTextStyle}>
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

LoginForm.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  emailChange: PropTypes.func.isRequired,
  passwordChange: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  loginUser: PropTypes.func.isRequired,
  error: PropTypes.string
}