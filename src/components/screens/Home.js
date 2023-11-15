import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  StatusBar,
} from 'react-native';
import InfoCard from '../customComponents/InfoCard';
import Charts from '../customComponents/Charts';
import CustomTable from '../customComponents/CustomTable';

export default class Home extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.homeContainer}>
            <View style={styles.header}>
              <Text>Sales Overview</Text>
              <View style={styles.cardContainer}>
                <InfoCard number={'15,600'} type={'Revenue'} url={require('../../assets/logo/performance.png')}/> 
                <InfoCard number={245} type={'Sales'} url={require('../../assets/logo/report.png')}/>
              </View>
              <View style={styles.cardContainer}>
                <InfoCard number={'2200'} type={'Profit'} url={require('../../assets/logo/Profit.png')}/>
                <InfoCard number={'12390'} type={'Cost'} url={require('../../assets/logo/cost.png')}/>
              </View>
            </View>
            <View style={styles.top}>
              <Charts/>
            </View>
            <ScrollView style={styles.middle}>
              <CustomTable title={'Top Selling Stock'}/>
            </ScrollView>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  cardContainer: {
    flex: 1,
    flexDirection: 'row',
    marginBottom:10,
    justifyContent: 'space-around',
  },
  scrollView: {
    flex: 1,
  },
  homeContainer: {
    flex: 1,
    backgroundColor: '#F2F2F2',
    padding: 10,
  },
  header: {
    flex: 1,
  },
  top: {
    flex: 0.8,
  },
  middle: {
    flex: 0.5,
  },
  bottom: {
    flex: 0.5,
    backgroundColor: 'pink',
  },
  text: {
    fontSize: 42,
  },
});
