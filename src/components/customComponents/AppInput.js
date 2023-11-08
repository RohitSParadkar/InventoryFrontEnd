import { StyleSheet, Text, View,Dimensions,TextInput } from 'react-native'
import React from 'react'

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

export default AppInput
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
    input: {
        height: 40,
        borderColor: '#000000',
        borderBottomWidth: 1,
        marginBottom: 36,
      },
})