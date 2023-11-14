import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Button } from '@rneui/themed';
import AppInput from '../customComponents/AppInput';
import OtpTimer from '../customComponents/OtpTimer';
import { useNavigation } from '@react-navigation/native';
import OtpInput from '../customComponents/OtpInput';
import { signupApi } from '../../api/AuthApi';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [reEnterPassword, setReEnterPassword] = useState('');
  const [otp, setOtp] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [signupResponse, setSignupResponse] = useState(null);
  const navigation = useNavigation()
  const handleSignUpButton = async () => {
    try {
      const response = await signupApi(email, reEnterPassword, name);
      setSignupResponse(response);
      console.warn(signupResponse._id); // Log the response
      navigation.navigate('OtpVerification', { signupResponse });
    } catch (error) {
      console.log(error);
    }

  };
  
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      keyboardShouldPersistTaps="handled"
    >
      <View style={styles.loginContainer}>
        <View style={styles.loginOuterContainer}>
          <View style={{ flex: 0.5 }}>
            <Text style={styles.itemName}>Sign Up</Text>
            <Text>Please sign up here</Text>
          </View>
          <View style={{ flex: 1.2 }}>
            <AppInput onChangeText={setName} value={name} autoFocus={true} placeholder={'Name'} />
            <AppInput onChangeText={setEmail} value={email} autoFocus={true} placeholder={'Email'} />
            <AppInput onChangeText={setPassword} value={password} placeholder="Password" secureTextEntry />
            <AppInput onChangeText={setReEnterPassword} value={reEnterPassword} placeholder="ReEnter Password" secureTextEntry />
            <View style={styles.centerContainer}>
              <Button color="secondary" containerStyle={styles.loginButton} onPress={handleSignUpButton}>
                Sign Up
              </Button>
              <View style={styles.centerTextContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('Forgot Password')}>
                  <Text>Forgot password?</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                  <Text>Login</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  loginContainer: {
    flexGrow: 1,
    backgroundColor: '#F2F2F2',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  loginOuterContainer: {
    flex: 0.6,
    width: 350,
  },
  itemName: {
    fontSize: 36,
    fontFamily: 'Noto Sans',
    color: '#464646',
    fontWeight: '600',
    fontStyle: 'normal',
  },
  centerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerTextContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
  },
  loginButton: {
    width: 100,
    marginBottom: 5,
  },
  // ... Your other styles ...
});

export default SignUp;
