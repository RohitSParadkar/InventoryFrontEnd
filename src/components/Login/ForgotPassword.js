import React, { useState } from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Button } from '@rneui/themed';
import AppInput from '../customComponents/AppInput';
import { useNavigation } from '@react-navigation/native';
import { forgotPassword } from '../../api/AuthApi';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [forgotPasswordResponse,setForgotPasswordResponse] = useState('')
  const navigation = useNavigation()
  const handleSendLinkButton = async () => {
    try {
      const response = await forgotPassword(email);
      setForgotPasswordResponse(response);
      console.warn(forgotPasswordResponse)
    } catch (error) {
      console.log(error);
    }

  };
  return (
    <ScrollView contentContainerStyle={styles.loginContainer} keyboardShouldPersistTaps="handled">
      <View style={styles.loginOuterContainer}>
        <View style={{ flex: 0.5 }}>
          <Text style={styles.itemName}>Forgot Password</Text>
          <Text>Send the Email Link</Text>
        </View>
        <View style={{ flex: 1.2 }}>
          <AppInput
            onChangeText={setEmail}
            value={email}
            autoFocus={true}
            placeholder={'Email'}
          />
          <View style={styles.centerContainer}>
            <Button color="secondary" containerStyle={styles.loginButton} onPress={handleSendLinkButton}>
             Send OTP
            </Button>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={{ marginLeft: 10, color: 'blue' }}>Back</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ForgotPassword;

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
