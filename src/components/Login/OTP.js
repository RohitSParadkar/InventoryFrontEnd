import {StyleSheet, Text, View, Dimensions,Image} from 'react-native';
import React, {useRef, useState} from 'react';
import {Button} from '@rneui/themed';
import OTPTextInput from 'react-native-otp-textinput';
import OtpTimer from '../customComponents/OtpTimer';

const OTP = () => {
  const [timeSet, setTimeSet] = useState(false);
  const otpInput = useRef(null);

  const clearText = () => {
    if (otpInput.current) {
      otpInput.current.clear();
    }
  };

  const setText = () => {
    if (otpInput.current) {
      otpInput.current.setValue('');
      setTimeSet(true);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.topOtpContainer}>
        <View style={styles.logoContainer}>
        <Image
            style={styles.mainLogo}
            source={require('../../assets/logo/blackLogo.png')}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.boldText}>Got it! please enter OTP</Text>
          <View>
          <Text style={styles.text}>You will get a confirmation code via email to your given email id.</Text>
          </View>
        </View>
      </View>
      <View style={styles.bottomOtpContainer}>
        <OTPTextInput
          ref={otpInput}
          containerStyle={styles.otpContainer}
          textInputStyle={styles.otpInput}
          tintColor="#1A1A27"
          offTintColor="#808080"
        />
        <Button title="Clear" onPress={clearText} />
        <Button title="Set Text" onPress={setText} />
        <OtpTimer timeSet={timeSet} duration={2} />
      </View>
    </View>
  );
};

export default OTP;

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topOtpContainer: {
    flex: 1,
  },
  logoContainer: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center'
  },
  textContainer: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
  },
  bottomOtpContainer: {
    flex: 0.5,
    justifyContent:'center',
    alignItems:'center',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems:"center",
    borderColor: 'blue',
    width:'80%'
  },
  otpInput: {
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderColor:'black',
    width: width * 0.11,
    height: width * 0.11,
    textAlign: 'center',
  },
  boldText:{
    color:'#101010',
    textAlign:'center',
    fontFamily:'Roboto',
    fontSize:20,
    fontWeight:'700'

  },
  text:{
    color:'rgba(16, 16, 16, 0.82)',
    textAlign:'center',
    fontFamily:'Roboto',
    fontSize:14,
    fontWeight:'bold',
    padding: 40,
    paddingTop:10,
    paddingBottom:0

  }
});
