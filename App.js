import React from 'react'
import { Provider } from 'react-redux'
import configureStore from './src/store/configureStore'
import firebase from 'firebase'
import firebaseConfig from './src/configs/firebaseConfig'
import Router from './src/configs/router'

export default () =>
  <Provider store={configureStore()}>
    <Router />
  </Provider>