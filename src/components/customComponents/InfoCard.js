import { Text, StyleSheet, View, Image,Dimensions } from 'react-native';
import React from 'react';

export default function InfoCard({number,type,url}) {
  return (
    <View style={styles.infoCardContainer}>
      <View >
        <Image
          style={styles.infoLogo}
          source={url}
        />
      </View>
      {/* <View style={styles.textContainer}>
        <View><Text>₹{number}</Text></View>
        <View><Text>{type}</Text></View>
      </View> */}
      <View>

      </View>
    </View>
  );
}

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  infoCardContainer: {
    backgroundColor: 'white',
    width: width*0.4,
    height:width*0.25,
    justifyContent: 'center',
    rowGap:width*0.01,
    borderRadius:width*0.01,
    borderColor:'#E8E8E8',
    borderWidth:1

  },
  infoLogo: {
    width: width*0.04,
    height: width*0.04,
  },
  textContainer: {
    flexDirection:'row',
    justifyContent:'space-around'
  },
});
