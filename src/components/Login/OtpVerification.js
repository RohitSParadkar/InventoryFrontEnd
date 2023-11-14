import React, { useState, useRef } from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity, StyleSheet, TextInput, Button as RNButton } from 'react-native';
import { Button } from '@rneui/themed';
import AppInput from '../customComponents/AppInput';
import OtpInput from '../customComponents/OtpInput';
import OTPTextInput from 'react-native-otp-textinput';
import { emailVerfication } from '../../api/AuthApi';
import { useNavigation } from '@react-navigation/native';
const OtpVerification = ({ route }) => {
  const navigation = useNavigation();
  const { signupResponse } = route.params;
  const otpInput = useRef(null);
  const [userInput, setUserInput] = useState('');
  const [otpVerifyResponse, setOtpVerifyResponse] = useState('');
  const handleInputChange = (input) => {
    // Limit input to 4 characters
    if (input.length <= 4) {
      setUserInput(input);
      if (otpInput.current) {
        otpInput.current.setValue(input);
      }
    }
  };

  const  handleOtpVerification =async()=>{
    // console.warn("befor api send")
    const userId = signupResponse._id;
    console.log(userId)
    await emailVerfication(userId,userInput).then((res) => {
        setOtpVerifyResponse(res);
    }).catch(err=>(console.log(err)))
    if(otpVerifyResponse.success){
      console.warn("verification Successful")
      navigation.navigate('Login')
    }else{
      console.warn("verification unsuccessful")
    }
   }
  return (
    <ScrollView contentContainerStyle={styles.loginContainer} keyboardShouldPersistTaps="handled">
      <View style={styles.loginOuterContainer}>
        <View style={{ flex: 0.5 }}>
          <Text style={styles.itemName}>OTP Verification</Text>
          <Text>OTP has been sent to your registered email address</Text>
        </View>
        <View style={{ flex: 1.2 }}>
          <View>
            <TextInput
              style={styles.userInput}
              value={userInput}
              onChangeText={handleInputChange}
              placeholder="Enter OTP"
              keyboardType="numeric"
              maxLength={4} // Limit input to 4 characters
            />
          </View>
          <View style={styles.centerContainer}>
            <Button color="secondary" containerStyle={styles.loginButton} onPress={handleOtpVerification}>
              Verify
            </Button>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={{ marginLeft: 10, color: 'blue' }}>Back</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
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
  authImg: {
    width: 40,
    height: 40,
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
  userInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
});

export default OtpVerification;
