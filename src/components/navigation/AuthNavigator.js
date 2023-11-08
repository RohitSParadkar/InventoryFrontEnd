import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from '../Login/LoginPage';
import SignUp from '../Login/SignUp';
import ForgotPassword from '../Login/ForgotPassword';
const Stack = createNativeStackNavigator();
const AuthNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="SignUp" screenOptions={{headerShown:false}}>
    <Stack.Screen
      name="Login"
      component={LoginPage}
    />
    <Stack.Screen
      name="Sign up"
      component={SignUp}
    />
    <Stack.Screen
      name="Forgot Password"
      component={ForgotPassword}
    />
  </Stack.Navigator>
  )
}

export default AuthNavigator

const styles = StyleSheet.create({})