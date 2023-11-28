import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  StatusBar,
} from 'react-native';
import InfoCard from '../customComponents/InfoCard';
import Charts, { CustomLineChart } from '../customComponents/Charts';
import CustomTable from '../customComponents/CustomTable';
import { BarChart, LineChart, PieChart } from "react-native-gifted-charts";

const lineData = [
  {value: 0, dataPointText: '0'},
  {value: 20, dataPointText: '20'},
  {value: 18, dataPointText: '18'},
  {value: 40, dataPointText: '40'},
  {value: 36, dataPointText: '36'},
  {value: 60, dataPointText: '60'},
  {value: 54, dataPointText: '54'},
  {value: 85, dataPointText: '85'}
];
const barData = [
  {
    value: 230,
    label: 'Jan',
    frontColor: '#4ABFF4',
    sideColor: '#23A7F3',
    topColor: '#92e6f6',
  },
  {
    value: 180,
    label: 'Feb',
    frontColor: '#79C3DB',
    sideColor: '#68BCD7',
    topColor: '#9FD4E5',
  },
  {
    value: 195,
    label: 'Mar',
    frontColor: '#28B2B3',
    sideColor: '#0FAAAB',
    topColor: '#66C9C9',
  },
  {
    value: 250,
    label: 'Apr',
    frontColor: '#4ADDBA',
    sideColor: '#36D9B2',
    topColor: '#7DE7CE',
  },
  {
    value: 320,
    label: 'May',
    frontColor: '#91E3E3',
    sideColor: '#85E0E0',
    topColor: '#B0EAEB',
  }]
  const tableHead = ['Name', 'Sold Quantity', 'Remaining Quantity', 'Price'];
const tableTitle = ['Maggie', 'Egg', 'Sugar', 'Coffee'];
const tableData = [
  ['1', '2', '200'],
  ['10', '12', '150'],
  ['11', '20', '100'],
  ['14', '13', '500'],
  ['14', '13', '500'],
  ['14', '13', '500'],
  ['14', '13', '500'],
  ['14', '13', '500'],
  ['14', '13', '500'],
  ['14', '13', '500'],

];
export default class Home extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.homeContainer}>
            <View style={{flexDirection:'row',justifyContent:'space-around',marginBottom:10}}>
              <View>
                <Text style={styles.boldText}>Overview</Text>
              </View>
              <View>
                <Text style={styles.boldText}>Inventory</Text>
              </View>
              <View>
                <Text style={styles.boldText}>Transaction</Text>
              </View>
              <View>
                <Text style={styles.boldText}>Supplier</Text>
              </View>
            </View>
            <View style={styles.header}>
              <View style={styles.cardContainer}>
                <InfoCard
                  number={'15,600'}
                  type={'Revenue'}
                  url={require('../../assets/logo/performance.png')}
                />
                <InfoCard
                  number={245}
                  type={'Sales'}
                  url={require('../../assets/logo/report.png')}
                />
              </View>
              <View style={styles.cardContainer}>
                <InfoCard
                  number={'2200'}
                  type={'Profit'}
                  url={require('../../assets/logo/Profit.png')}
                />
                <InfoCard
                  number={'12390'}
                  type={'Cost'}
                  url={require('../../assets/logo/cost.png')}
                />
              </View>
            </View>
            <View style={styles.top}>
              <Text>Revenue</Text>
              {/* <Charts />
              <CustomLineChart/> */}
      <View style={{marginLeft:10,paddingLeft:20}}>
            <BarChart data={barData} isThreeD />
        </View>
            </View>
            <ScrollView style={styles.middle}>
            <CustomTable tableData={tableData} tableHead={tableHead} tableTitle={tableTitle}/>
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
    
  },
  cardContainer: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 10,
    justifyContent: 'space-around',
  },
  scrollView: {
    flex: 1,
  },
  homeContainer: {
    flex: 1,
    padding: 10,
    backgroundColor:'white'
  },
  header: {
    flex: 1,
  },
  top: {
    flex: 0.8,
    margin:10,
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
  boldText: {
    color: '#1A1A27',
    fontFamily: 'DM Sans',
    fontSize: 15,
    fontStyle: 'normal',
    fontWeight: '500',
    letterSpacing: 0.2,
  },
});
