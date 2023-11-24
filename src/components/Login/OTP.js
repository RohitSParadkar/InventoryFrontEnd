import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView, // Import ScrollView
} from 'react-native';
import React, {useRef, useState} from 'react';
import {Button} from '@rneui/themed';
import OTPTextInput from 'react-native-otp-textinput';
import OtpTimer from '../customComponents/OtpTimer';

const OTP = () => {
  const [timeSet, setTimeSet] = useState(true);
  const [otpValue, setOtpValue] = useState('');
  const otpInput = useRef(null);

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
          <Button color="#1A1A27" containerStyle={styles.loginButton}>
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
