import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import LoginPage from '../Login/LoginPage';
import SignUp from '../Login/SignUp';
import Home from '../screens/Home';
import OverView from '../screens/Inventory/OverView';
import Buy from '../screens/Transcation/Buy';
import Transaction from '../screens/Transcation/Transaction';
import History from '../screens/Transcation/History';
import Flash from '../Login/Flash';
import SignIn from '../Login/SignIn';
import OTP from '../Login/OTP';
import Seller from '../screens/Statements/Seller';
import Inventory from '../screens/Inventory/Inventory';
import Sell from '../screens/Transcation/Sell';
import SignUPI from '../Login/SignUPI';
import ForgotPassword from '../Login/ForgotPassword';
import OtpVerification from '../Login/OtpVerification';
import ChatBot from '../customComponents/ChatBot';
const Stack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();

const AuthNavigator = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator initialRouteName="ForgotPassword" >
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{ headerShown: false }}
      />
       <Stack.Screen
        name="ChatBot"
        component={ChatBot}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Sign up"
        component={SignUPI}
        options={{ headerShown: false }}
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
          headerTitle: 'Overview',
          headerBackVisible: false,
          gestureDirection: 'horizontal',
          headerRight: () => (
            <TouchableOpacity
              style={{ marginRight: 10 }}
              onPress={async () => {
                // Clear AsyncStorage data here
                await AsyncStorage.clear();

                // Navigate to the sign-in screen
                navigation.navigate('Sign up');
              }}>
              <Text style={{ color: '#FFFFFF', fontSize: 18 }}>Logout</Text>
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="Seller"
        component={Seller}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: '#1A1A27', // Set your desired background color
          },
          headerTintColor: '#FFFFFF', // Set your desired text color
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          gestureDirection: 'horizontal'
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
          gestureDirection: 'horizontal'
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
          headerTitle: 'Transaction',
          gestureDirection: 'horizontal'
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
          headerTitle: 'Transaction',
          gestureDirection: 'horizontal'
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
          headerTitle: 'Transaction',
          gestureDirection: 'horizontal'
        }}
      />
      <Stack.Screen
        name="OtpVerification"
        component={OtpVerification}
      />
      <Stack.Screen
        name="OTP"
        component={OTP}
      />
    </Stack.Navigator>
  )




  // return (
  //   <Tab.Navigator initialRouteName="OverView">
  //     <Tab.Screen
  //       name="OverView"
  //       component={OverView}
  //       tabBarOptions={{
  //         tabBarLabelStyle: {fontSize: 12},
  //         tabBarItemStyle: {width: 100},
  //         tabBarStyle: {backgroundColor: 'yellow'},
  //       }}
  //     />

  //     <Tab.Screen name="Inventory" component={Inventory} />
  //     <Tab.Screen name="Transaction" component={Transaction} />
  //   </Tab.Navigator>
  // );
};

export default AuthNavigator;

const styles = StyleSheet.create({});
