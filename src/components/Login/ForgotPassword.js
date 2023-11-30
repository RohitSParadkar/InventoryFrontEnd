import React, {useState,useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Switch,
  TouchableOpacity,
  ScrollView, // Import ScrollView
} from 'react-native';
import {Button} from '@rneui/themed';
import Toast from 'react-native-toast-message';
import AppInput from '../customComponents/AppInput';
import {TextInput} from 'react-native-paper';
import UnderlineSVG, {LoginEyeIcon} from '../../assets/svg/UnderlineSVG';
import {useRoute} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
import OTPTextInput from 'react-native-otp-textinput';
import {signupApi} from '../../api/AuthApi';


const ForgotPassword = () => {
  const route = useRoute();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [reEnterPassword, setReEnterPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(true);
  const [signupResponse, setSignupResponse] = useState(null);
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
  const handleSignUpButton = async () => {
    if (password !== reEnterPassword) {
      Toast.show({
        type: 'error',
        text1: 'Invalid Password',
        text2: 'Password doesn\'t match!',
      });
    } else {
      try {
        const response = await signupApi(email, reEnterPassword);
        setSignupResponse(response);
  
        // Check if the response is successful before navigating
        if (response && response._id) {
          navigation.navigate('OTP', { signupResponse: response });
        } else {
          // Handle the case where the response is not as expected
          console.warn('Invalid response from signupApi:', response);
          // You may want to show an error message or take appropriate action
        }
      } catch (error) {
        console.log(error);
      }
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
            <Text style={styles.boldText}>Got it! please enter OTP</Text>
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
            <Text>OTP</Text>
            <View>
            <OTPTextInput
            ref={otpInput}
            containerStyle={styles.otpContainer}
            textInputStyle={styles.otpInput}
            tintColor="#1A1A27"
            offTintColor="#808080"
            autoFocus={true}
            handleTextChange={handleOtpChange}
          />
            </View>
            <Text>Confrim Password</Text>
            <View>
              <AppInput
                onChangeText={setReEnterPassword}
                value={reEnterPassword}
                autoFocus={true}
                placeholder={'Confrim Password'}
                secureTextEntry={confrpasswordVisible}
              />
              <TouchableOpacity
                style={{position: 'absolute', top: 20, right: 50}}
                onPress={handleConfrPasswordShow}>
                <Image
                  style={{width: 20, height: 20}}
                  source={require('../../assets/logo/Iconseye.png')}
                />
              </TouchableOpacity>
            </View>
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
              onPress={handleSignUpButton}>
              Reset Password
            </Button>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ForgotPassword;

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