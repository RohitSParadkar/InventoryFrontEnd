import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const OtpInputBox = () => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']); // Array to store OTP digits

  const handleOtpChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;

    // Move to the next input box on value entry
    if (index < 5 && value !== '') {
      this[`otpInput${index + 1}`].focus();
    }

    setOtp(newOtp);
  };

  return (
    <View style={styles.otpContainer}>
      {otp.map((digit, index) => (
        <TextInput
          key={index}
          ref={(input) => (this[`otpInput${index}`] = input)}
          style={styles.otpInput}
          keyboardType="numeric"
          maxLength={1}
          value={digit}
          onChangeText={(value) => handleOtpChange(index, value)}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  otpInput: {
    width: 40,
    height: 40,
    fontSize: 16,
    borderBottomWidth: 1,
    margin: 5,
    textAlign: 'center',
  },
});

export default OtpInputBox;
