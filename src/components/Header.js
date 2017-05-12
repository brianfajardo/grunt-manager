import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default Header = ({ text }) => {
  const { viewStytle, textStyle } = styles

  return (
    <View style={viewStytle}>
      <Text style={textStyle}>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  viewStytle: {
    backgroundColor: '#3D91C9',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.4,
    elevation: 2
  },
  textStyle: {
    fontSize: 16,
    color: 'white'
  }
})