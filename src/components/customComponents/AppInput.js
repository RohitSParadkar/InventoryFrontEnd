import { StyleSheet, Text, View,Dimensions,TextInput } from 'react-native'
import React from 'react'
import { Modal } from 'react-native-paper'

const AppInput = ({value,placeholder,onChange,...rest}) => {
  return (
    <TextInput
    style={styles.input}
    onChangeText={onChange}
    value={value}
    placeholder={placeholder}
    {...rest}
  />
  )
}

export const ModalAppInput = ({value,placeholder,onChange,...rest})=>{
  return (
    <TextInput
    style={styles.modalInput}
    onChangeText={onChange}
    value={value}
    placeholder={placeholder}
    {...rest}
  />
  )
}

export default AppInput
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
    input: {
      height: 40,
      width:313,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      borderRadius:5.22
      },
      modalInput:{
        height: 40,
      width:200,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      borderRadius:5.22
      }
})