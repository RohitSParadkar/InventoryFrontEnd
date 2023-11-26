import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView, // Import ScrollView
} from 'react-native';
import React, {useRef, useState,useEffect} from 'react';
import {Button} from '@rneui/themed';
import { emailVerfication } from '../../api/AuthApi';
import OTPTextInput from 'react-native-otp-textinput';
import Toast from 'react-native-toast-message';
import { useNavigation } from '@react-navigation/native';
import OtpTimer from '../customComponents/OtpTimer';

const OTP = ({ route }) => {
  const navigation = useNavigation();
  const { signupResponse } = route.params;
  const [timeSet, setTimeSet] = useState(true);
  const [otpVerifyResponse, setOtpVerifyResponse] = useState();
  const [otpValue, setOtpValue] = useState('');
  const otpInput = useRef(null);

  console.warn(signupResponse)
  const clearText = () => {
    if (otpInput.current) {
      otpInput.current.clear();
      setOtpValue('');
    }
  };

  const setText = () => {
    if (otpInput.current) {
      setTimeSet(true);
    }
  };

  const handleOtpChange = value => {
    setOtpValue(value);
    console.warn(JSON.stringify(value));
  };


  const handleOtpVerification = async () => {
    try {
      const userId = signupResponse._id;
      console.log(userId);
  
      // Wait for the API call to complete using await
      const res = await emailVerfication(userId, otpValue);
  
      // Update state after the API call is completed
      setOtpVerifyResponse(res);
  
      if (res.success) {
        Toast.show({
          type: 'success',
          text1: 'Sign up',
          text2: 'Sign up Successful',
        });
        console.warn('Verification Successful');
        navigation.navigate('SignIn')
      } else {
        Toast.show({
          type: 'error',
          text1: 'Sign up',
          text2: 'Sign up Unsuccessful',
        });
        console.warn('Verification Unsuccessful');
      }
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
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
              <Text style={styles.text}>
                You will get a confirmation code via email to your given email
                id.
              </Text>
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
            autoFocus={true}
            handleTextChange={handleOtpChange}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              width: 400,
              margin: 20,
            }}>
            <TouchableOpacity>
              <Text style={styles.text}>Edit email</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.text}>Resend OTP</Text>
            </TouchableOpacity>
          </View>
          <Button color="#1A1A27" containerStyle={styles.loginButton} onPress={handleOtpVerification}>
            Verify OTP
          </Button>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
              columnGap: 2,
            }}>
            <Text>OTP is valid for :</Text>
            <OtpTimer timeSet={timeSet} duration={2} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
export default OTP;

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
  },
  topOtpContainer: {
    flex: 1,
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomOtpContainer: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'blue',
    width: '80%',
  },
  otpInput: {
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderColor: 'black',
    width: width * 0.11,
    height: width * 0.11,
    textAlign: 'center',
  },
  boldText: {
    color: '#101010',
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: 20,
    fontWeight: '700',
  },
  text: {
    color: 'rgba(16, 16, 16, 0.82)',
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: 14,
    fontWeight: 'bold',
    padding: 40,
    paddingTop: 10,
    paddingBottom: 0,
  },
  loginButton: {
    width: 305,
    marginBottom: 43,
    justifyContent: 'center',
    borderRadius: 10,
  },
});
