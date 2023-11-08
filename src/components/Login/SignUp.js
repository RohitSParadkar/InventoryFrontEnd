import React, {useState} from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {Button} from '@rneui/themed';
import AppInput from '../customComponents/AppInput';
import { useNavigation } from '@react-navigation/native';

const SignUp = () => {
    const navigation = useNavigation()
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [reEnterPassword, setReEnterPassword] = useState('');
  return (
    <ScrollView
      contentContainerStyle={styles.loginContainer}
      keyboardShouldPersistTaps="handled">
      <View style={styles.loginOuterContainer}>
        <View style={{flex: 0.5}}>
          <Text style={styles.itemName}>Sign Up</Text>
          <Text>Please sign up here</Text>
        </View>
        <View style={{flex: 1.2}}>
          <AppInput
            onChangeText={setName}
            value={name}
            autoFocus={true}
            placeholder={'Name'}
          />
          <AppInput
            onChangeText={setUsername}
            value={username}
            autoFocus={true}
            placeholder={'Email'}
          />
          <AppInput
            onChangeText={setPassword}
            value={password}
            placeholder="Password"
            secureTextEntry
          />
          <AppInput
            onChangeText={setReEnterPassword}
            value={reEnterPassword}
            placeholder="ReEnter Password"
            secureTextEntry
          />
          <View style={styles.centerContainer}>
            <Button color="secondary" containerStyle={styles.loginButton}>
              Sign up
            </Button>
            <View style={styles.centerTextContainer}>
              <TouchableOpacity onPress={()=>navigation.navigate('Forgot Password')}>
                <Text>Forgot password?</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
                <Text>Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    backgroundColor: '#F2F2F2',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  loginOuterContainer: {
    flex: 0.6,
    width: 350,
  },
  itemName: {
    fontSize: 36,
    fontFamily: 'Noto Sans',
    color: '#464646',
    fontWeight: '600',
    fontStyle: 'normal',
  },
  authImg: {
    width: 40,
    height: 40,
  },
  centerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerTextContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
  },
  loginButton: {
    width: 100,
    marginBottom: 5,
  },
  // ... Your other styles ...
});
