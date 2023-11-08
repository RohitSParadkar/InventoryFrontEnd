import React, { useState } from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Button } from '@rneui/themed';
import AppInput from '../customComponents/AppInput';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <ScrollView contentContainerStyle={styles.loginContainer} keyboardShouldPersistTaps="handled">
      <View style={styles.loginOuterContainer}>
        <View style={{ flex: 0.5 }}>
          <Text style={styles.itemName}>Login</Text>
          <Text>Glad you are back</Text>
        </View>
        <View style={{ flex: 1.2 }}>
          <AppInput
            onChangeText={setUsername}
            value={username}
            autoFocus={true}
            placeholder={'Username'}
          />
          <AppInput
            onChangeText={setPassword}
            value={password}
            placeholder="Password"
            secureTextEntry
          />
          <View style={styles.centerContainer}>
            <Button color="secondary" containerStyle={styles.loginButton}>
              Login
            </Button>
            <View style={styles.centerTextContainer}>
              <TouchableOpacity>
                <Text>Forgot password?</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text>New User</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              flex: 0.2,
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: 10,
              columnGap: 30,
            }}>
            <TouchableOpacity>
              <Image source={require('../../assets/logo/google.png')} style={styles.authImg} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={require('../../assets/logo/facebook.png')} style={styles.authImg} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={require('../../assets/logo/github.png')} style={styles.authImg} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default LoginPage;

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
    alignItems:'center',
    marginTop: 5,
  },
  loginButton: {
    width: 100,
    marginBottom: 5,
  },
  // ... Your other styles ...
});
