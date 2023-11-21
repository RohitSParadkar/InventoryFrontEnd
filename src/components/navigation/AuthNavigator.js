import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from '../Login/LoginPage';
import SignUp from '../Login/SignUp';
import Home from '../screens/Home';
import OverView from '../screens/Inventory/OverView';
import Buy from '../screens/Transcation/Buy';
import History from '../screens/Transcation/History';
import Flash from '../Login/Flash';
import SignIn from '../Login/SignIn';
import TransactionStat from '../screens/Statements/TransactionStat';
import Inventory from '../screens/Inventory/Inventory';
import Sell from '../screens/Transcation/Sell';
import SignUPI from '../Login/SignUPI';
import ForgotPassword from '../Login/ForgotPassword';
import OtpVerification from '../Login/OtpVerification';
const Stack = createNativeStackNavigator();
const AuthNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="OverView" >
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Sign up"
        component={SignUPI}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Forgot Password"
        component={ForgotPassword}
      />
      <Stack.Screen
       name="OverView"
       component={OverView}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: '#1A1A27', // Set your desired background color
          },
          headerTintColor: '#FFFFFF', // Set your desired text color
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitle: 'Overview'
        }}
      />
      <Stack.Screen
       name="TransactionStat"
       component={TransactionStat}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: '#1A1A27', // Set your desired background color
          },
          headerTintColor: '#FFFFFF', // Set your desired text color
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitle: 'Statment'
        }}
      />
      <Stack.Screen
        name="Inventory"
        component={Inventory}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: '#1A1A27', // Set your desired background color
          },
          headerTintColor: '#FFFFFF', // Set your desired text color
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name="Buy"
        component={Buy}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: '#1A1A27', // Set your desired background color
          },
          headerTintColor: '#FFFFFF', // Set your desired text color
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitle: 'Transaction'
        }}
      />
       <Stack.Screen
        name="Sell"
        component={Sell}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: '#1A1A27', // Set your desired background color
          },
          headerTintColor: '#FFFFFF', // Set your desired text color
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitle: 'Transaction'
        }}
      />
       <Stack.Screen
        name="History"
        component={History}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: '#1A1A27', // Set your desired background color
          },
          headerTintColor: '#FFFFFF', // Set your desired text color
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitle: 'Transaction'
        }}
      />
      <Stack.Screen
        name="OtpVerification"
        component={OtpVerification}
      />
    </Stack.Navigator>
  )
}

export default AuthNavigator

const styles = StyleSheet.create({})