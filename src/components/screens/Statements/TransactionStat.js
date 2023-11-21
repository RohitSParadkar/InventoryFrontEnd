import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TransactionStat = () => {
  return (
    <View style={styles.transactionStatContainer}>
      <Text>TransactionStat</Text>
    </View>
  )
}

export default TransactionStat

const styles = StyleSheet.create({
    transactionStatContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:"center"
    }

})