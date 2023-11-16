import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from '../Login/LoginPage';
import SignUp from '../Login/SignUp';
import Home from '../screens/Home';
import Flash from '../Login/Flash';
import SignIn from '../Login/SignIn';
import SignUPI from '../Login/SignUPI';
import ForgotPassword from '../Login/ForgotPassword';
import OtpVerification from '../Login/OtpVerification';
const Stack = createNativeStackNavigator();
const AuthNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="InventoryHome" >
    <Stack.Screen
      name="SignIn"
      component={SignIn}
      options={{headerShown:false}}
    />
    <Stack.Screen
      name="Sign up"
      component={SignUPI}
      options={{headerShown:false}}
    />
    <Stack.Screen
      name="Forgot Password"
      component={ForgotPassword}
    />
     <Stack.Screen
      name="InventoryHome"
      component={Home}
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