import React, { useRef } from 'react';
import { View, StyleSheet } from 'react-native';
import OTPTextInput from 'react-native-otp-textinput';
import { Button } from '@rneui/themed';

const OtpInput = () => {
  const otpInput = useRef(null);

  const clearText = () => {
    if (otpInput.current) {
      otpInput.current.clear();
    }
  };

  const setText = () => {
    if (otpInput.current) {
      otpInput.current.setValue('1234');
    }
  };

  return (
    <View>
      <OTPTextInput ref={otpInput} />
      <Button title="Clear" onPress={clearText} />
      <Button title="Set Text" onPress={setText} />
    </View>
  );
};

export default OtpInput;
