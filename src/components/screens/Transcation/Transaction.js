import { StyleSheet, Text, View } from 'react-native'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Buy from './Buy';
import Sell from './Sell';
import History from './History';
import React from 'react'
const Tab = createMaterialTopTabNavigator();
const Transaction = () => {
  return (
    <>
    <Tab.Screen name="Buy" component={Buy} />
    <Tab.Screen name="Sell" component={Sell} />
    <Tab.Screen name="History" component={History} />
    </>
  )
}

export default Transaction

const styles = StyleSheet.create({})