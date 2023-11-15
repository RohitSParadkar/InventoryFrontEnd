import {
  StyleSheet,
  Text,
  View,
  Image,
  Switch,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {Button} from '@rneui/themed';
import AppInput from '../customComponents/AppInput';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={styles.signInContainer}>
      <View style={styles.topContainer}>
        <Image
          style={styles.mainLogo}
          source={require('../../assets/logo/blackLogo.png')}
        />
      </View>
      <View style={styles.bottomContainer}>
        <View >
          <Text style={{marginRight:20}}>Sign In</Text>
          <Text>Sign UP</Text>
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
          <AppInput
            onChangeText={setPassword}
            value={password}
            autoFocus={true}
            placeholder={'Enter Password'}
          />
        </View>
        <View style={styles.toggleContainer}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Switch
              trackColor={{false: '#1A1A27', true: '#81b0ff'}}
              thumbColor={isEnabled ? '#f4f3f4' : '#f4f3f4'}
              ios_backgroundColor="#1A1A27"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
            <Text>Remember me</Text>
          </View>

          <TouchableOpacity>
            <Text>Forgot password?</Text>
          </TouchableOpacity>
        </View>
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
          <Button color="#1A1A27" containerStyle={styles.loginButton}>
            Sign In
          </Button>
        </View>
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  signInContainer: {
    flex: 1,
    padding: 10,
  },
  topContainer: {
    flex: 0.7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomContainer: {
    flex: 0.6,
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
    borderRadius:10
  },
});
