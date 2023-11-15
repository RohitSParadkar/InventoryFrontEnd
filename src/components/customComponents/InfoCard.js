import { Text, StyleSheet, View, Image } from 'react-native';
import React from 'react';

export default function InfoCard({number,type,url}) {
  return (
    <View style={styles.infoCardContainer}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.infoLogo}
          source={url}
        />
      </View>
      <View style={styles.textContainer}>
        <View><Text>₹{number}</Text></View>
        <View><Text>{type}</Text></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  infoCardContainer: {
    backgroundColor: 'white',
    width: 150,
    height: 100,
    justifyContent: 'center',
    rowGap:10,
    borderRadius:15

  },
  infoLogo: {
    width: 50,
    height: 50,
  },
  textContainer: {
    flexDirection:'row',
    justifyContent:'space-around'
  },
  imageContainer: {
    marginLeft:50
  },
});
