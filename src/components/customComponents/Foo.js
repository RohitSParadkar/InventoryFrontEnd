import { StyleSheet, Text, View,Button  } from 'react-native'
import Toast from 'react-native-toast-message';
import React from 'react'

const Foo = () => {
    const showToast = () => {
        Toast.show({
          type: 'success',
          text1: 'Hello',
          text2: 'This is some something 👋'
        });
      }
  return (
       <Button
      title='Show toast'
      onPress={showToast}
    />
  )
}

export default Foo

const styles = StyleSheet.create({})