import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import React,{useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import CustomTable from '../../customComponents/CustomTable';
import MyComponent from '../../customComponents/MyComponent';
import CustomModal from '../../customComponents/CustomModal';

const tableHead = ['Products', 'Buying Price', 'Quantity', 'Expiry Date','Availability'];
const tableTitle = ['Maggie', 'Egg', 'Sugar', 'Coffee'];
const tableData = [
  ['maggie', '2', '200','6 Nov 2023','In Stock'],
  ['Tea', '2', '200','6 Nov 2023','In Stock'],
  ['Sugar', '2', '200','6 Nov 2023','In Stock'],
  ['Soap', '2', '200','6 Nov 2023','In Stock'],
  ['Soap', '2', '200','6 Nov 2023','In Stock'],
  ['Soap', '2', '200','6 Nov 2023','In Stock'],
  ['Soap', '2', '200','6 Nov 2023','In Stock'],
  ['Soap', '2', '200','6 Nov 2023','In Stock'],
  ['Soap', '2', '200','6 Nov 2023','In Stock'],
  ['Soap', '2', '200','6 Nov 2023','In Stock'],

];
const Inventory = () => {
  const navigation = useNavigation();
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <ScrollView style={styles.scrollContainer}>
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
                <Text style={styles.boldText}>Statement</Text>
              </View>
            </View>
      <View style={styles.tableContainer}>
      <CustomTable tableData={tableData} tableHead={tableHead} />
      </View>
      <View style={styles.bottomContainer}>
      <TouchableOpacity onPress={toggleModal}>
          <View style={styles.circle}>
          <Image
            style={styles.addLogo}
            source={require('../../../assets/logo/add.png')}
          />
          </View>
          <CustomModal isModalVisible={isModalVisible} handleButton1={()=>{ setModalVisible(!isModalVisible);}} handleButton2={()=>{ setModalVisible(!isModalVisible);}}/>
          {/* <MyComponent/> */}
          </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Inventory;
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor:'white',
    padding:width*0.085
  },
  circle: {
    backgroundColor: '#1A1A27',
    width: width * 0.14,
    height: width * 0.14,
    borderRadius: width * 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addLogo: {
    width: width * 0.15,
    height: width * 0.15,
  },
  tableContainer: {
    flex: 1,
    backgroundColor: 'yellow',
    height:height*0.8
  },
  bottomContainer:{
    flex: 1,
    height:height*0.2,
    justifyContent:'center',
    alignItems:'flex-end',
    paddingRight:width*0.1
  }
});
