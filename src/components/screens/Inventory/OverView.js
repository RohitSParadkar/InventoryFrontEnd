import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import UnderlineSVG from '../../../assets/svg/UnderlineSVG';
import InfoCard from '../../customComponents/InfoCard';
import {DataTable} from 'react-native-paper';
import CustomTable from '../../customComponents/CustomTable';
import {useNavigation} from '@react-navigation/native';
import {BarChart, LineChart, PieChart} from 'react-native-gifted-charts';

const lineData = [
  {value: 0, dataPointText: '0'},
  {value: 20, dataPointText: '20'},
  {value: 18, dataPointText: '18'},
  {value: 40, dataPointText: '40'},
  {value: 36, dataPointText: '36'},
  {value: 60, dataPointText: '60'},
  {value: 54, dataPointText: '54'},
  {value: 85, dataPointText: '85'},
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
  },
];
const OverView = () => {
  const navigation = useNavigation();
  const [page, setPage] = React.useState(0);
  const [numberOfItemsPerPageList] = React.useState([4, 5, 6]);
  const [itemsPerPage, onItemsPerPageChange] = React.useState(
    numberOfItemsPerPageList[0],
  );

  const [items] = React.useState([
    {
      key: 1,
      name: 'Cupcake',
      calories: 356,
      fat: 16,
    },
    {
      key: 2,
      name: 'Eclair',
      calories: 262,
      fat: 16,
    },
    {
      key: 3,
      name: 'Frozen yogurt',
      calories: 159,
      fat: 6,
    },
    {
      key: 4,
      name: 'Gingerbread',
      calories: 305,
      fat: 3.7,
    },
  ]);

  const from = page * itemsPerPage;
  const to = Math.min((page + 1) * itemsPerPage, items.length);

  React.useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.homeContainer}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginBottom: 10,
            }}>
            <TouchableOpacity onPress={() => navigation.navigate('OverView')}>
              <Text style={styles.boldText}>Overview</Text>
              <UnderlineSVG />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Inventory')}>
              <Text style={styles.boldText}>Inventory</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Buy')}>
              <Text style={styles.boldText}>Transaction</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('TransactionStat')}>
              <Text style={styles.boldText}>Statement</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.header}>
            <View style={styles.cardContainer}>
              <InfoCard
                number={'15,600'}
                type={'Revenue'}
                url={require('../../../assets/logo/performance.png')}
              />
              <InfoCard
                number={245}
                type={'Sales'}
                url={require('../../../assets/logo/report.png')}
              />
            </View>
            <View style={styles.cardContainer}>
              <InfoCard
                number={'2200'}
                type={'Profit'}
                url={require('../../../assets/logo/Profit.png')}
              />
              <InfoCard
                number={'12390'}
                type={'Cost'}
                url={require('../../../assets/logo/cost.png')}
              />
            </View>
          </View>
          <View style={styles.top}>
            <View style={{borderRadius:2,borderWidth:1,padding:10,borderRadius:20}}>
              <Text style={styles.boldText}>Profit</Text>
              {/* <Charts />
              <CustomLineChart/> */}
              <View style={{marginLeft: 10, paddingLeft: 20}}>
                <BarChart data={barData} isThreeD style={{marginTop: 10}} />
              </View>
            </View>
          </View>
          <ScrollView style={styles.middle}>
            <Text style={styles.boldText}>Top Selling Products</Text>
            <DataTable
              style={{
                backgroundColor: '#F2F2F4',
                borderRadius: 10,
                borderWidth: 1,
              }}>
              <DataTable.Header
                style={{backgroundColor: '#E7EFF3', borderRadius: 10}}>
                <DataTable.Title style={styles.tableHeader}>
                  Product Name
                </DataTable.Title>
                <DataTable.Title numeric style={styles.tableHeader}>
                  Price
                </DataTable.Title>
                <DataTable.Title numeric style={styles.tableHeader}>
                  Quantity
                </DataTable.Title>
              </DataTable.Header>

              {items.slice(from, to).map(item => (
                <DataTable.Row key={item.key}>
                  <DataTable.Cell>{item.name}</DataTable.Cell>
                  <DataTable.Cell numeric>{item.calories}</DataTable.Cell>
                  <DataTable.Cell numeric>{item.fat}</DataTable.Cell>
                </DataTable.Row>
              ))}

              <DataTable.Pagination
                page={page}
                numberOfPages={Math.ceil(items.length / itemsPerPage)}
                onPageChange={page => setPage(page)}
                label={`${from + 1}-${to} of ${items.length}`}
                numberOfItemsPerPageList={numberOfItemsPerPageList}
                numberOfItemsPerPage={itemsPerPage}
                onItemsPerPageChange={onItemsPerPageChange}
                showFastPaginationControls
                selectPageDropdownLabel={'Rows per page'}
              />
            </DataTable>
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default OverView;

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
    backgroundColor: 'white',
  },
  header: {
    flex: 1,
  },
  top: {
    flex: 0.8,
    margin: 10,
  },
  middle: {
    flex: 0.2,
    marginTop: 10,
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
  tableHeader: {
    color: '#495D69',
    fontFamily: 'Lato',
    fontWeight: '700',
    fontSize: 14,
  },
});
