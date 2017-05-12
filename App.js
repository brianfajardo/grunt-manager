import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import firebase from 'firebase'
import firebaseConfig from './firebaseConfig'
import rootReducer from './src/reducers'

import Header from './src/components/Header'
import LoginForm from './src/containers/LoginForm'

export default class App extends Component {

  componentWillMount() {
    firebase.initializeApp(firebaseConfig)
  }

  render() {
    return (
      <Provider store={createStore(rootReducer)}>
        <View style={{ flex: 1 }}>
          <Header text="Boss Simulator 2017" />
          <LoginForm />
        </View>
      </Provider>
    )
  }
}