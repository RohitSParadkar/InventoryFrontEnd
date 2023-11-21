import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Switch,
  TouchableOpacity,
  ScrollView, // Import ScrollView
} from 'react-native';
import { Button } from '@rneui/themed';
import AppInput from '../customComponents/AppInput';
import UnderlineSVG from '../../assets/svg/UnderlineSVG';
import { useNavigation } from '@react-navigation/native';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEnabled, setIsEnabled] = useState(false);
  const [passwordVisible,setPasswordVisible] =useState(true)
  const navigation = useNavigation()
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const handlePasswordShow = ()=>{
    setPasswordVisible(!passwordVisible)
  }
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
          <View style={{ flexDirection: 'row', marginBottom: 20 }}>
            <View>
              <TouchableOpacity>
              <Text style={[{ marginRight: 40 }, styles.boldText]}>Sign In </Text>
              <UnderlineSVG />
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity onPress={() => navigation.navigate('Sign up')}>
              <Text>Sign Up</Text>
              </TouchableOpacity>
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
            <Text>Password</Text>
            <View>
            <AppInput
              onChangeText={setPassword}
              value={password}
              autoFocus={true}
              placeholder={'Enter Password'}
              secureTextEntry={passwordVisible}
            />
              <TouchableOpacity style={{position:'absolute',top:20,right:50}} onPress={handlePasswordShow}>
              <Image
                style={{width: 20, height: 20,}}
                source={require('../../assets/logo/Iconseye.png')}
              />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.toggleContainer}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Switch
                trackColor={{ false: '#1A1A27', true: '#81b0ff' }}
                thumbColor={isEnabled ? '#f4f3f4' : '#f4f3f4'}
                ios_backgroundColor="#1A1A27"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
              <Text style={styles.boldText}>Remember me</Text>
            </View>

            <TouchableOpacity>
              <Text style={styles.boldText}>Forgot password?</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              paddingBottom: 20, // Adjusted padding to avoid button being covered by keyboard
            }}>
            <Button color="#1A1A27" containerStyle={styles.loginButton} onPress={() => navigation.navigate('OverView')}>
              Sign In
            </Button>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignIn;

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

