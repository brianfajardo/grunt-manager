import React from 'react'
import { View, ActivityIndicator } from 'react-native'

export default Spinner = ({ size, color }) =>
  <View>
    <ActivityIndicator
      size={size}
      color={color}
    />
  </View>