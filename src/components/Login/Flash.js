import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const Flash = () => {
  return (
    <View style={styles.conatiner}>
      <View style={styles.topContainer}>
        <Image
          style={styles.mainLogo}
          source={require('../../assets/logo/Homelogo.png')}
        />
        
      </View>
      <View style={styles.bottomContainer}>
       <Text style={styles.textColor}>From</Text>
       <Text style={styles.textColor}>ZOGNEST</Text>
      </View>
    </View>
  );
};

export default Flash;

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    backgroundColor: '#1A1A27',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textColor: {
    color: 'white',
  },
  mainLogo: {
    width: 80,
    height: 84,
  },
  topContainer:{
   flex:1,
   justifyContent:'center',
   alignItems:'center'
  },
  bottomContainer:{
    flex:0.2,
   justifyContent:'center',
   alignItems:'center'
  }
});
