import React, { useState } from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Button } from '@rneui/themed';
import AppInput from '../customComponents/AppInput';
import { useNavigation } from '@react-navigation/native';
import { LoginApi } from '../../api/AuthApi';
// email = bivega5693@othao.com password = Famin@12345
const LoginPage = () => {
 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginData,setLoginData] = useState([])
  const navigation = useNavigation()

  const  handleLoginButton =async()=>{
    // console.warn("befor api send")
    await LoginApi(email,password).then((res) => {
      setLoginData(res);
    }).catch(err=>(console.log(err)))
    if(loginData.success){
      console.warn("login Successful")
      const homeRedirect = ()=>navigation.navigate('InventoryHome')
      homeRedirect();
    }else{
      console.warn("login Fail invalid email or password ")
    }
   }
  return (
    <ScrollView contentContainerStyle={styles.loginContainer} keyboardShouldPersistTaps="handled">
      <View style={styles.loginOuterContainer}>
        <View style={{ flex: 0.5 }}>
          <Text style={styles.itemName}>Login</Text>
          <Text>Glad you are back</Text>
        </View>
        <View style={{ flex: 1.2 }}>
          <AppInput
            onChangeText={setEmail}
            value={email}
            autoFocus={true}
            placeholder={'Email'}
          />
          <AppInput
            onChangeText={setPassword}
            value={password}
            placeholder="Password"
            secureTextEntry
          />
          <View style={styles.centerContainer}>
            <Button color="secondary" containerStyle={styles.loginButton} onPress={handleLoginButton}>
              Login
            </Button>
            <View style={styles.centerTextContainer}>
              <TouchableOpacity onPress={()=>navigation.navigate('Forgot Password')}>
                <Text>Forgot password?</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>navigation.navigate('Sign up')}>
                <Text>New User </Text>
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
