import React, { Component } from 'react'
import { View } from 'react-native'
import { Provider } from 'react-redux'
import configureStore from './src/store/configureStore'
import firebase from 'firebase'
import firebaseConfig from './firebaseConfig'

import Header from './src/components/Header'
import LoginForm from './src/containers/LoginForm'

const store = configureStore()

export default class App extends Component {

  componentWillMount() {
    firebase.initializeApp(firebaseConfig)
  }

  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <Header text="Boss Simulator 2017" />
          <LoginForm />
        </View>
      </Provider>
    )
  }
}