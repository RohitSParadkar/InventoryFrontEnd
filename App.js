/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import LoginPage from './src/components/Login/LoginPage';
import CustomLogin from './src/components/Login/CustomLogin';
import ForgotPassword from './src/components/Login/ForgotPassword';
import SignUp from './src/components/Login/SignUp';
import AuthNavigator from './src/components/navigation/AuthNavigator';
import Home from './src/components/screens/Home';
import Flash from './src/components/Login/Flash';
import SignIn from './src/components/Login/SignIn';
function App() {
  return (
//     <NavigationContainer>
//    <AuthNavigator/>
// </NavigationContainer>
  // <Home/>
  // <Flash/>
  <SignIn/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
});

export default App;
