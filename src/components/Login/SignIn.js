import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Switch,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import { Button } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import AppInput from '../customComponents/AppInput';
import { LoginApi } from '../../api/AuthApi';
import UnderlineSVG from '../../assets/svg/UnderlineSVG';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEnabled, setIsEnabled] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(true);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    const checkStoredCredentials = async () => {
      try {
        setLoading(true);

        const storedEmail = await AsyncStorage.getItem('userEmail');
        const storedPassword = await AsyncStorage.getItem('userPassword');

        if (storedEmail && storedPassword) {
          const response = await LoginApi(storedEmail, storedPassword);

          if (response.success) {
            navigation.navigate('OverView');
            Toast.show({
              type: 'success',
              text1: 'Sign In',
              text2: 'Sign in Successful',
            });
          } else {
            Toast.show({
              type: 'error',
              text1: 'Sign In',
              text2: 'Incorrect email or password',
            });
          }
        }
      } catch (error) {
        console.error("Error retrieving stored credentials:", error);
      } finally {
        setLoading(false);
      }
    };

    checkStoredCredentials();
  }, [navigation]);

  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const handlePasswordShow = () => {
    setPasswordVisible((prevVisible) => !prevVisible);
  };

  const handleLoginButton = async () => {
    try {
      setLoading(true);

      const response = await LoginApi(email, password);

      if (response.success) {
        Toast.show({
          type: 'success',
          text1: 'Sign In',
          text2: 'Sign in Successful',
        });

        if (isEnabled) {
          await AsyncStorage.setItem('userEmail', email);
          await AsyncStorage.setItem('userPassword', password);
        }

        navigation.navigate('OverView');
      } else {
        Toast.show({
          type: 'error',
          text1: 'Sign In',
          text2: 'Incorrect email or password',
        });
      }
    } catch (error) {
      console.log("Error during login:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
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
              <TouchableOpacity onPress={() => navigation.navigate('Sign up', { caption: `${email}` })}>
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
              <TouchableOpacity style={{ position: 'absolute', top: 20, right: 50 }} onPress={handlePasswordShow}>
                <Image
                  style={{ width: 20, height: 20, }}
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
              paddingBottom: 20,
            }}>
            {loading ? (
              <ActivityIndicator size="large" color="#1A1A27" />
            ) : (
              <Button
                color="#1A1A27"
                containerStyle={styles.loginButton}
                onPress={handleLoginButton}>
                Sign In
              </Button>
            )}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

SignIn.navigationOptions = {
  headerLeft: null,
};

export default SignIn;

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
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
  textInput: {
    marginBottom: 20,
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
