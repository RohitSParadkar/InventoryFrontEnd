import React, {useRef} from 'react';
import {View, StyleSheet} from 'react-native';
import OTPTextInput from 'react-native-otp-textinput';
import {Button} from '@rneui/themed';

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
    <View style={styles.container}>
   
        <OTPTextInput
          ref={otpInput}
          containerStyle={styles.otpContainer}
          textInputStyle={styles.otpInput}
        />
        <Button title="Clear" onPress={clearText} />
        <Button title="Set Text" onPress={setText} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    marginTop: 20,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: 'blue',
  },
  otpInput: {
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 8,
    width: 40,
    height: 40,
    textAlign: 'center',
  },
});

export default OtpInput;
