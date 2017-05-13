import React, { Component } from 'react'
import { View } from 'react-native'
import { Provider } from 'react-redux'
import configureStore from './src/store/configureStore'
import firebase from 'firebase'
import firebaseConfig from './firebaseConfig'

import Router from './src/Router'
import Header from './src/components/Header'

const store = configureStore()

export default class App extends Component {

  componentWillMount() {
    firebase.initializeApp(firebaseConfig)
  }

  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    )
  }
}