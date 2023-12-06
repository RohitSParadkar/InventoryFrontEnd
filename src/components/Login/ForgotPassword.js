import React, {useState,useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Switch,
  TouchableOpacity,
  Dimensions,
  ScrollView, // Import ScrollView
} from 'react-native';
import {Button} from '@rneui/themed';
import Toast from 'react-native-toast-message';
import AppInput from '../customComponents/AppInput';
import {TextInput} from 'react-native-paper';
import UnderlineSVG, {LoginEyeIcon} from '../../assets/svg/UnderlineSVG';
import {useRoute} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
import { forgotPassword } from '../../api/AuthApi';
import OTPTextInput from 'react-native-otp-textinput';
import {signupApi} from '../../api/AuthApi';


const ForgotPassword = () => {
  const route = useRoute();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [reEnterPassword, setReEnterPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(true);
  const [forgotEmailResponse, setForgotEmailResponse] = useState(null);
  const [confrpasswordVisible, setConfrPasswordVisible] = useState(true);
  const otpInput = useRef(null);
  const navigation = useNavigation();
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const handlePasswordShow = () => {
    setPasswordVisible(!passwordVisible);
  };
  const handleOtpChange = value => {
    setOtpValue(value);
    console.warn(JSON.stringify(value));
  };

  const handleConfrPasswordShow = () => {
    setConfrPasswordVisible(!confrpasswordVisible);
  };
  const handleSendOTPButton = async () => {
    try {
      const response = await forgotPassword(email);
      setForgotEmailResponse(response);
      // console.warn(response?.user)
      // Check if the response is successful before navigating
      if (response && response?.user) {
        console.warn(response?.user?._id)
        navigation.navigate('OTP', { signupResponse: response?.user });
      } else {
        // Handle the case where the response is not as expected
        console.warn('Invalid response from signupApi:', response);
        // You may want to show an error message or take appropriate action
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      {/* Wrap your existing code inside ScrollView */}
      <View style={styles.signInContainer}>
        <View style={styles.topContainer}>
          <Image
            style={styles.mainLogo}
            source={require('../../assets/logo/blackLogo.png')}
          />
        </View>
        <View style={styles.bottomContainer}>
        <View style={styles.textContainer}>
            <Text style={styles.boldText}>Please enter the registered email address</Text>
            <View>
              <Text style={styles.text}>
                You will get a confirmation code via email to your given email
                id.
              </Text>
            </View>
          </View>
          <View style={styles.textInput}>
            <Text>Email id</Text>
            <AppInput
              onChangeText={setEmail}
              value={email}
              autoFocus={true}
              placeholder={'Enter Email'}
            />
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              paddingBottom: 20, // Adjusted padding to avoid button being covered by keyboard
            }}>
            <Button
              color="#1A1A27"
              containerStyle={styles.loginButton}
              onPress={handleSendOTPButton}>
              Send OTP
            </Button>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ForgotPassword;
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1, // Added flexGrow to allow content to be scrollable
  },
  signInContainer: {
    flex: 1,
    padding: 10,
  },
  topContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topOtpContainer: {
    flex: 1,
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
  otpButton:{
    flex:1,
    flexDirection:'row',
    columnGap:width*0.55
  },
  bottomContainer: {
    flex: 0.6,
    padding: 20,
  },
  mainLogo: {
    width: 80,
    height: 84,
  },
  signIncontainer: {
    flexDirection: 'row',
  },
  toggleContainer: {
    flex: 0.3,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  loginButton: {
    width: 305,
    marginBottom: 43,
    justifyContent: 'center',
    borderRadius: 10,
  },
  boldText: {
    color: '#1A1A27',
    fontFamily: 'DM Sans',
    fontSize: 15,
    fontStyle: 'normal',
    fontWeight: '500',
    letterSpacing: 0.2,
  },
});