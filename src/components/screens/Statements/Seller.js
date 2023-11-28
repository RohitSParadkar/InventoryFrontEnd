import { StyleSheet, Text, View,Button } from 'react-native'
import Toast from 'react-native-toast-message';
import React from 'react'

const Seller = () => {
  const showToast = () => {
    Toast.show({
      type: 'success',
      text1: 'Hello',
      text2: 'This is some something 👋'
    });
  }
  return (
    <View style={styles.transactionStatContainer}>
       <Button
      title='Show toast'
      onPress={showToast}
    />
    </View>
  )
}

export default Seller

const styles = StyleSheet.create({
    transactionStatContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:"center"
    }

})