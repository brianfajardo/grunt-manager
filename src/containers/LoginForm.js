import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { FormLabel, FormInput, Button } from 'react-native-elements'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import * as actions from '../actions'

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

  render() {
    const { email, password } = this.props
    const { componentContainer, buttonContainer, buttonStyle } = style

    return (
      <View style={componentContainer}>
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
        <View style={buttonContainer}>
          <Button
            title="Login"
            onPress={this.onButtonPress}
            buttonStyle={buttonStyle}
          />
        </View>
      </View>
    )
  }
}

const mapStateToProps = ({ auth: { email, password } }) => ({
  email,
  password
})

LoginForm.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  emailChange: PropTypes.func.isRequired,
  passwordChange: PropTypes.func.isRequired
}

const style = StyleSheet.create({
  componentContainer: {
    flex: 1
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center'
  },
  buttonStyle: {
    borderRadius: 20,
    marginTop: 50,
    width: 150
  }
})

export default connect(mapStateToProps, actions)(LoginForm)