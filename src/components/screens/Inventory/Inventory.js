import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const Inventory = () => {
    const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Text>Inventory</Text>
    </View>
  )
}

export default Inventory

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})