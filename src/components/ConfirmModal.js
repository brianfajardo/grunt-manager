import React from 'react'
import { View, Modal, StyleSheet } from 'react-native'
import { Card, Button } from 'react-native-elements'
import PropTypes from 'prop-types'

export default ConfirmModal = ({ title, visible, onAcceptPress, onDeclinePress }) => {
  const { textStyle, containerStyle } = styles

  return (
    <Modal
      animationType="slide"
      transparent
      visible={visible}
      // Passing in an empty function to fulfill
      // Android requirements
      onRequestClose={() => { }}
    >
      <View style={containerStyle}>
        <Card title={title}>
          <Button title="Yes" onPress={onAcceptPress} />
          <Button title="No" onPress={onDeclinePress} />
        </Card>
      </View>
    </Modal>
  )
}

ConfirmModal.propTypes = {
  title: PropTypes.string,
  visible: PropTypes.bool.isRequired,
  onAcceptPress: PropTypes.func.isRequired,
  onDeclinePress: PropTypes.func.isRequired
}

const styles = StyleSheet.create({
  textStyle: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 40
  },
  containerStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    position: 'relative',
    flex: 1,
    justifyContent: 'center'
  }
})