import React from 'react'
import { View } from 'react-native'
import { Provider } from 'react-redux'
import configureStore from './src/store/configureStore'
import firebase from 'firebase'
import firebaseConfig from './src/firebaseConfig'

import Router from './src/Router'

const store = configureStore()

export default () =>
  <Provider store={store}>
    <Router />
  </Provider>