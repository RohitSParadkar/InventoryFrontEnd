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
function App() {
  return (
    <NavigationContainer>
   <AuthNavigator/>
</NavigationContainer>
  //  <View style={styles.container}>
  //  {/* <Home/> */}
  //  <LoginPage/>
  //  {/* <ForgotPassword/> */}
  //  {/* <SignUp/> */}
  //  {/* <CustomLogin/> */}
  //  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
});

export default App;
