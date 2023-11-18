import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import Modal from 'react-native-modal';
import { ModalAppInput } from '../../customComponents/AppInput';
import { Button } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import CustomTable from '../../customComponents/CustomTable';
import MyComponent from '../../customComponents/MyComponent';
import CustomModal from '../../customComponents/CustomModal';
import { creatProductsApi } from '../../../api/AuthApi';

const tableHead = ['Products', 'Buying Price', 'Quantity', 'Expiry Date', 'Availability'];
const tableTitle = ['Maggie', 'Egg', 'Sugar', 'Coffee'];
const tableData = [
  ['maggie', '2', '200', '6 Nov 2023', 'In Stock'],
  ['Tea', '2', '200', '6 Nov 2023', 'In Stock'],
  ['Sugar', '2', '200', '6 Nov 2023', 'In Stock'],
  ['Soap', '2', '200', '6 Nov 2023', 'In Stock'],
  ['Soap', '2', '200', '6 Nov 2023', 'In Stock'],
  ['Soap', '2', '200', '6 Nov 2023', 'In Stock'],
  ['Soap', '2', '200', '6 Nov 2023', 'In Stock'],
  ['Soap', '2', '200', '6 Nov 2023', 'In Stock'],
  ['Soap', '2', '200', '6 Nov 2023', 'In Stock'],
  ['Soap', '2', '200', '6 Nov 2023', 'In Stock'],

];
const Inventory = () => {
  const navigation = useNavigation();
  const [isModalVisible, setModalVisible] = useState(false);
  const [productName, setProductName] = useState('');
  const [productID, setProductID] = useState('');
  const [category, setCategory] = useState('');
  const [quantity, setQuantity] = useState('');
  const [amount, setAmount] = useState('');
  const [expiry, setExpiry] = useState('');
  const [ response,setResponse] = useState()
  const handleButton2 = async () => {
    await creatProductsApi(productID, productName,category,quantity,amount,expiry).then((res) => {
      setResponse(res);
      setModalVisible(!isModalVisible);
      setProductName('');
      setProductID('');
      setCategory('');
      setQuantity('');
      setAmount('');
      setExpiry('');
    }).catch(err=>(console.log(err)))
    // setModalVisible(!isModalVisible);
  };
  const handleButton1 = async () => {
    setModalVisible(!isModalVisible);
  };
  
  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: 10 }}>
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
        <TouchableOpacity onPress={handleButton1}>
          <View style={styles.circle}>
            <Image
              style={styles.addLogo}
              source={require('../../../assets/logo/add.png')}
            />
          </View>

          {/* modal code */}
          <View style={{ flex: 1 }}>
            <ScrollView>
              <Modal isVisible={isModalVisible}>
                <View style={[styles.modalContainer, { height: height * 0.6, }]}>
                  <View style={styles.newProduct}>
                    <Text style={styles.productTitle}>New Product</Text>
                    <View style={styles.rowFlexCenter}>
                      <Text style={styles.idText}>Product Name:</Text>
                      <ModalAppInput
                        onChangeText={setProductName}
                        value={productName}
                        autoFocus={true}
                        placeholder={'Enter product name'}
                      />
                    </View>
                    <View style={styles.rowFlexCenter}>
                      <Text style={styles.idText}>Product ID:</Text>
                      <ModalAppInput
                        onChangeText={setProductID}
                        value={productID}
                        autoFocus={true}
                        placeholder={'Product ID'}
                      />
                    </View>
                    <View style={styles.rowFlexCenter}>
                      <Text style={styles.idText}>Category :</Text>
                      <ModalAppInput
                        onChangeText={setCategory}
                        value={category}
                        autoFocus={true}
                        placeholder={'Category'}
                      />
                    </View>
                    <View style={styles.rowFlexCenter}>
                      <Text style={styles.idText}>Quantity:</Text>
                      <ModalAppInput
                        onChangeText={setQuantity}
                        value={quantity}
                        autoFocus={true}
                        placeholder={'Quantity'}
                      />
                    </View>
                    <View style={styles.rowFlexCenter}>
                      <Text style={styles.idText}>Amount:</Text>
                      <ModalAppInput
                        onChangeText={setAmount}
                        value={amount}
                        autoFocus={true}
                        placeholder={'Amount'}
                      />
                    </View>
                    <View style={styles.rowFlexCenter}>
                      <Text style={styles.idText}>Expiry Date:</Text>
                      <ModalAppInput
                        onChangeText={setExpiry}
                        value={expiry}
                        autoFocus={true}
                        placeholder={'Expiry Date'}
                      />
                    </View>
                  </View>
                  <View style={styles.buttonContiner}>
                    <Button
                      color="#1A1A27"
                      containerStyle={styles.loginButton}
                      onPress={handleButton1}>
                      Cancle
                    </Button>
                    <Button
                      color="#1A1A27"
                      containerStyle={styles.loginButton}
                      onPress={handleButton2}>
                      Add Product
                    </Button>
                  </View>
                </View>
              </Modal>
            </ScrollView>
          </View>
          {/* <MyComponent/> */}
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Inventory;
const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: 'white',
    padding: width * 0.085
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
    height: height * 0.8
  },
  bottomContainer: {
    flex: 1,
    height: height * 0.2,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: width * 0.1
  },
  //modal style
  modalContainer: {
    backgroundColor: 'white',
    borderTopLeftRadius: width * 0.1,
    borderTopRightRadius: width * 0.1,
    borderBottomLeftRadius: width * 0.1,
    borderBottomRightRadius: width * 0.1,
  },
  newProduct: {
    flex: 1,
    margin: 10,
  },
  rowFlexCenter: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  idText: {
    fontFamily: 'Inter',
    fontSize: 16,
    fontWeight: '500',
    color: '#48505E',
  },
  productTitle: {
    fontFamily: 'Inter',
    fontSize: 16,
    fontWeight: '500',
    color: '#48505E',
    marginLeft: width * 0.1,
    marginBottom: width * 0.05,
  },
  loginButton: {
    width: width * 0.27,
    marginBottom:width * 0.05,
    justifyContent: 'center',
    borderRadius: width * 0.05,
  },
  buttonContiner:{
    flexDirection:'row',
    justifyContent:'flex-end',
    columnGap:width*0.02,
    paddingRight:width*0.04,
    
  }
});
