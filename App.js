import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './src/reducers'

export default App = () =>
  <Provider store={createStore(rootReducer)}>
    <View style={styles.container}>
      <Text>Employer Simulator 2017</Text>
    </View>
  </Provider>

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
